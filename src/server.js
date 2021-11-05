const express = require('express');
const connectionDB = require ('./db.connection');
const routerTasks = require('./routes/tasks.routes');
const app = express();

connectionDB();
//settings

app.set("port", process.env.port || 3000);

app.use(express.json());
/*app.get('/', (req, res) =>{
    res.send('Hi');
});*/

app.use("/todos", routerTasks);
module.exports = app;