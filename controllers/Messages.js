const Message = require('./../models/Message');
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

exports.messages = async (req,res)=>{
    try{
        const results = await Message.findAll()
        res.json(results)
    } catch (e){
        console.log(e)
    }
}
