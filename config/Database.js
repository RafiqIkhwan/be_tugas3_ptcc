import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db','root','',{
    host: '34.57.69.161',
    dialect: 'mysql'
});

export default db;