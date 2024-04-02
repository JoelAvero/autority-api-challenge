import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class Todo extends Model {}
  Todo.init(
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      isComplete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      modelName: 'todo',
      sequelize,
    },
  );

  return Todo;
}
