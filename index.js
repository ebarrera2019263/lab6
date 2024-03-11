import express from 'express';
import bodyParser from 'body-parser';
const { json } = bodyParser;
import cors from 'cors';
import eventsRoutes from './routes/post.js';
;




const app = express();
const port = 3000;

app.use(json());



app.use(cors());



app.use((error, req, res, next) => {
    console.error('Error manejado:', error);
    if (res.headersSent) {
        return next(error);
    }
    res.status(500).send('Error interno del servidor');
});

app.use('/events', eventsRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
