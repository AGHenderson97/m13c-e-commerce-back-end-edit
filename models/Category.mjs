import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
    // Other fields go here
  },
  {
    sequelize,
    modelName: 'category'
  }
);

export default Category;
