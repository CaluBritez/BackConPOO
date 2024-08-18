import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js";

// Modelo de abogados
export const productModel = sequelize.define('productos', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'productos'
});
