const {database} = require("./config");
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: 'mysql'
    }
);

const connection = async () =>{
    sequelize.sync().then(() => {
        console.log('nos conectamos a la DB');
    }).catch(error => console.log('se ha producido un error', error))
}

module.exports = connection;
global.sequelize = sequelize;