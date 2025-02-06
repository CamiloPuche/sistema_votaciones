# Sistema de Votaciones

Este es un sistema de votaciones desarrollado con Node.js, Express, Sequelize y MySQL. El sistema permite la gestión de votantes, candidatos y votos, y proporciona estadísticas de votación.

## Requisitos

- Node.js (versión 14 o superior)
- MySQL (versión 5.7 o superior)

## Configuración del Proyecto

### 1. Clonar el Repositorio

```bash
https://github.com/CamiloPuche/sistema_votaciones.git
cd sistema_votaciones

2. Instalar Dependencias

npm install

3. Configurar Variables de Entorno (en .env)
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=sistema-votaciones
JWT_SECRET=tu_secreto_jwt
PORT=3000

4. Configurar la Base de Datos
Asegúrate de tener MySQL instalado y en ejecución. Luego, crea la base de datos:

CREATE DATABASE `sistema-votaciones`;

5. Ejecutar Migraciones
Ejecuta las migraciones para crear las tablas necesarias en la base de datos:

npx sequelize-cli db:migrate

Ejecución del Proyecto

1. Iniciar el Servidor

npm start

El servidor se iniciará en el puerto 3000 (o el puerto configurado en el archivo .env).

2. Documentación de la API
La documentación de la API está disponible en http://localhost:3000/docs.

Endpoints
Autenticación
POST /register: Registrar un nuevo votante.
POST /login: Iniciar sesión.
Votantes
GET /voters: Obtener una lista de votantes.
GET /voters/{id}: Obtener un votante por ID.
PUT /voters/{id}: Actualizar un votante por ID.
DELETE /voters/{id}: Eliminar un votante por ID.
Candidatos
POST /candidates: Crear un nuevo candidato.
GET /candidates: Obtener una lista de candidatos.
GET /candidates/{id}: Obtener un candidato por ID.
PUT /candidates/{id}: Actualizar un candidato por ID.
DELETE /candidates/{id}: Eliminar un candidato por ID.
Votos
POST /votes: Crear un nuevo voto.
GET /votes: Obtener una lista de votos.
GET /votes/{id}: Obtener un voto por ID.
PUT /votes/{id}: Actualizar un voto por ID.
DELETE /votes/{id}: Eliminar un voto por ID.
Estadísticas
GET /votes/statistics: Obtener estadísticas de votación.

Estructura del Proyecto

sistema-votaciones/
├── .env
├── app.js
├── config/
│   └── config.json
├── migrations/
│   ├── 20250205015811-create-voters-table.js
│   ├── 20250205015833-create-candidates-table.js
│   └── 20250205015856-create-votes-table.js
├── package.json
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── candidateController.js
│   │   ├── voteController.js
│   │   └── voterController.js
│   ├── database.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Candidate.js
│   │   ├── Relations.js
│   │   ├── Vote.js
│   │   └── Voter.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── candidateRoutes.js
│   │   ├── voteRoutes.js
│   │   └── voterRoutes.js
│   └── swagger.js
└── README.md
```

### En la carpeta capturas se encuentran las evidencias de las respuestas del API

Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
