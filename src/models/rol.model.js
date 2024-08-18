import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js";

export const rolModel = sequelize.define("roles",{
    role_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    timestamps: false,
    tableName: 'roles'
}
);
