# Descripción del Proyecto

Este proyecto consiste en una API RESTful desarrollada en Node.js utilizando el framework Express.js. La API permite gestionar eventos, incluyendo operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los eventos almacenados en una base de datos MySQL.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos:

- **index.js**: Archivo principal que inicializa el servidor Express y configura las rutas.
- **post.js**: Contiene las definiciones de las rutas relacionadas con la gestión de eventos.
- **database.js**: Establece la conexión con la base de datos MySQL.

## Configuración y Uso

1. Clona el repositorio en tu máquina local.
2. Asegúrate de tener Node.js y MySQL instalados en tu sistema.
3. Instala las dependencias del proyecto ejecutando `npm install`.
4. Configura la base de datos MySQL. Reemplaza las credenciales de conexión en el archivo `database.js` con las de tu base de datos específica.
5. Crea la base de datos `lab6` (o la que hayas especificado en la configuración).
6. Importa la estructura de la base de datos ejecutando el script SQL provisto.
7. Ejecuta el servidor con el comando `npm start`.
8. Accede a la API a través de `http://localhost:3000`.

## Documentación de la API

La documentación de la API está disponible mediante Swagger. Puedes acceder a ella desde `http://localhost:3000/api-docs`.

## Dependencias

El proyecto utiliza las siguientes dependencias:

- **Express.js**: Framework web para Node.js.
- **Body-Parser**: Middleware para el manejo de datos en las solicitudes HTTP.
- **CORS**: Middleware para habilitar el acceso a recursos desde diferentes orígenes.
- **mysql**: Cliente MySQL para Node.js.
- **Swagger**: Para la documentación de la API.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
