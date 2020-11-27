const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT;
const connectionDB = require('./config/db');
const message = require("./routes/Message");
const morgan = require('morgan');

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(morgan('combined'));
//DB Connection
connectionDB();

//Routes declaration
app.use("/message", message);

app.listen(PORT, ()=>{
    console.log(`API funcionando en ${PORT}`)
})