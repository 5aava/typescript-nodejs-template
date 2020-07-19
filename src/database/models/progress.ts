import sequelize from './index';
import { DataTypes, Model } from 'sequelize';


interface ProgressInstance extends Model {
  id: number;
  name: string;

  createdAt?: Date;
  updatedAt?: Date;
}

const ProgressModel = sequelize.define<ProgressInstance>('Progress', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
}, {});


export default ProgressModel;
