import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('node-app', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
});

export default sequelize;
