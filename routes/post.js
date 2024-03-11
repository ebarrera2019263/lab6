
import { Router } from 'express';
const router = Router();


import db from '../database.js';



let events = [
    { id: 1, title: "Evento de Apertura", description: "Descripción del Evento de Apertura", date: "2024-01-01", location: "Ciudad X" }
];

router.get('/', (req, res) => {
    db.query('SELECT * FROM events', (error, results) => {
        if (error) {
            console.error('Error al consultar la base de datos:', error);
            return res.status(500).send('Error al obtener los eventos de la base de datos.');
        }
        console.log('Eventos consultados correctamente:', results);
        res.status(200).json(results);
    });
    

    
});

router.get('/:eventId', (req, res) => {
    const { eventId } = req.params;
    db.query('SELECT * FROM events WHERE id = ?', [eventId], (error, results) => {
        if (error) {
            console.error('Error al consultar el evento en la base de datos:', error);
            return res.status(500).send('Error al obtener el evento de la base de datos.');
        }
        if (results.length > 0) {
            console.log('Evento encontrado:', results[0]);
            res.status(200).json(results[0]);
        } else {
            res.status(404).send('Evento no encontrado.');
        }
    });
});


router.post('/', (req, res) => {
    const { title, description, date, location, image } = req.body;
    
    if (!title || !description || !date || !location || !image) {
      return res.status(400).send('Todos los campos son requeridos, incluyendo la imagen.');
    }
  
  
    const query = 'INSERT INTO events (title, description, date, location, image) VALUES (?, ?, ?, ?, ?)';
    
    db.query(query, [title, description, date, location, image], (error, results) => {
      if (error) {
        console.error('Error al insertar en la base de datos:', error);
        return res.status(500).send('Error al insertar el evento en la base de datos.');
      }
      console.log('Evento insertado correctamente:', results);
      res.status(200).json({ id: results.insertId, ...req.body });
    });
  });
  




router.put('/:eventId', (req, res) => {
    const { eventId } = req.params;
    const { title, description, date, location } = req.body;
    const eventIndex = events.findIndex(e => e.id == eventId);

    if (eventIndex > -1) {
        events[eventIndex] = { id: eventId, title, description, date, location };
        res.status(200).json(events[eventIndex]);
    } else {
        res.status(404).send();
    }
});


router.delete('/:eventId', (req, res) => {
    const { eventId } = req.params;
    const eventIndex = events.findIndex(e => e.id == eventId);

    if (eventIndex > -1) {
        events.splice(eventIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

export default router;
