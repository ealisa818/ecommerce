const express = require('express');
const sequelize = require('./config.connection')

const app = express();

const PORT = process.env.PORT || 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// WE EXPORTED ON CONNECTION.JS THIS IS WHERE WE IMPORT IT HERE
sequelize.sync({force: true}).then(() => {
// THIS CREATES THE SERVER
    app.listen(PORT, () => {
    console.log(I'M HERE! ${PORT}');
});
});
// THIS CONNECTS THE SEQUELIZE LIBRARY TO THE SERVER

