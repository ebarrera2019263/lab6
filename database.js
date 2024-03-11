import { createConnection } from 'mysql';
const connection = createConnection({
  host: 'localhost', // Usualmente 'localhost' si tu base de datos corre en tu máquina local
  user: 'root', // 'root' es el usuario predeterminado de MySQL en XAMPP sin contraseña
  password: '', // Deja esta cadena vacía para indicar que no hay contraseña
  database: 'lab6' // Reemplaza 'tu_base_de_datos' con el nombre de tu base de datos específica
});

connection.connect((error) => {
  if (error) throw error;
  console.log('Conexión exitosa con la base de datos');
});

export default connection;
