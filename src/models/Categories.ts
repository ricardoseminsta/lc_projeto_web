import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface CategoriesInstance extends Model {
    id: number;
    nome: string;
}

export const User = sequelize.define<CategoriesInstance>("User",{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
    },
    slug: {
        type: DataTypes.STRING,
    }
    }, {
    tableName: 'categories',
    timestamps: false
});