const express = require('express');
const app = express();
const PORT = 4000 || process.env.PORT;
const connectionDB = require('./config/db');
const message = require("./routes/Message");
const user = require("./routes/User");
const morgan = require('morgan');
const sequelize = require('./config/db')

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(morgan('combined'));


//Routes declaration
app.use("/message", message);
app.use("/user", user);


app.listen(PORT, ()=>{
    console.log(`API funcionando en ${PORT}`)
})

//autenticacion
try{
    sequelize.authenticate()
    console.log("Conectado a la Base de Datos")
} catch (e){
    console.log("Hubo un error al conectar a la base de datos")
}
