import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { Comment } from "./Comment";

export const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

User.hasMany(Comment, {as: 'comments', onDelete: 'cascade'});
Comment.belongsTo(User, {foreignKey: 'userId', as: 'user'});