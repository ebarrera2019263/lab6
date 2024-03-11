import express from 'express';

import db from '../database.js';

const router = express.Router();

// Configuración de Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Mi Aplicación',
      version: '1.0.0',
      description: 'Documentación de la API de Mi Aplicación',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Rutas donde se encuentran tus definiciones de Swagger
};



// Definición de rutas

// Obtener todos los eventos
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

// Obtener un evento por su ID
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

// Crear un nuevo evento
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

// Modificar un evento existente
router.put('/:eventId', (req, res) => {
  const { eventId } = req.params;
  const { title, description, date, location } = req.body;
  // Implementa la lógica para modificar un evento existente
});

// Eliminar un evento
router.delete('/:eventId', (req, res) => {
  const { eventId } = req.params;
  // Implementa la lógica para eliminar un evento
});

export default router;


