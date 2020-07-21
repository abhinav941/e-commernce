import sequelize from '../util/database';
import Sequelize from 'sequelize';

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    imageURL: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: Sequelize.STRING,
});

export default Product;
