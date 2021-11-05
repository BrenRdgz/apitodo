const express = require('express');
const connectionDB = require ('./db.connection');
const routerTasks = require('./routes/tasks.routes');
const app = express();

connectionDB();
//settings

app.set("port", process.env.PORT);
app.use(function(req, res, next) {
    res.setTimeout(1000);
    next();
  });

app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Hi');
});

app.use("/todos", routerTasks);
module.exports = app;
