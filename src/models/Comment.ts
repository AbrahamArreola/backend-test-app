import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Comment = sequelize.define("comment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
