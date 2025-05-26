import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db','root','',{
    host: '34.121.224.221',
    dialect: 'mysql'
});

export default db;
