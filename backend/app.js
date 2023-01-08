const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Todos = require("./model/todos");

const todosRoutes = require('./routes/todos');

const app = express();
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});



app.use('/todos', todosRoutes);

mongoose
  .connect(
    'mongodb+srv://root:root@cluster0.viozaat.mongodb.net/?retryWrites=true&w=majority'
  )
  .then( () => {
    app.listen(5000); // diferente puerto para evitar conflictos
  })
  .catch(err => {
    console.log(err);
  });