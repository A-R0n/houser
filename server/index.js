const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();

// Require functions from controller
const { getHouse, addHouse, deleteHouse } = require('./Controller/controller')

const port = 3500;

app.use(json());

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
    app.set('db', dbInstance);
})
.catch(err => console.log(err));

// Endpoints
app.post(`/api/test`, addHouse);
app.get(`/api/test`, getHouse);
app.delete('/api/test/:id', deleteHouse);


app.listen(port, () => {
    console.log(`All the wayyyy upppp: ${port}`)
});