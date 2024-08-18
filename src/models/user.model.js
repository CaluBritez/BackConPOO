import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js";
import { rolModel } from "./rol.model.js";

export const userModel = sequelize.define("usuarios", {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: rolModel,
            key: rolModel.primaryKeyAttribute
        },
    },
},
{
    timestamps: false,
    tableName: 'usuarios'
}
);
