const express = require('express');
const sequelize = require('./src/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const authRoutes = require('./src/routes/authRoutes');
const voterRoutes = require('./src/routes/voterRoutes');
const candidateRoutes = require('./src/routes/candidateRoutes');
const voteRoutes = require('./src/routes/voteRoutes');


const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

app.use(authRoutes);
app.use(voterRoutes);
app.use(candidateRoutes);
app.use(voteRoutes);


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize.sync({ force: false }).then(() => {
    console.log('Conexión a la base de datos exitosa');

    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
        console.log(`Documentación disponible en http://localhost:${PORT}/docs`);
    });
}).catch(error => {
    console.error('Error al conectar a la base de datos:', error);
});
