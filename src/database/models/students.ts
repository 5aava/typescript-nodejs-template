import sequelize from './index';
import { DataTypes, Model } from 'sequelize';
import ProgressModel from './progress';


interface StudentInstance extends Model {
  id: number;
  firstname: string;
  lastname: string;
  progressId: number;

  createdAt?: Date;
  updatedAt?: Date;
}


const StudentModel = sequelize.define<StudentInstance>('Students', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  progressId: {
    type: DataTypes.SMALLINT,
    references: {
      model: ProgressModel,
      key: 'id',
    },
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
}, {

});

StudentModel.belongsTo(ProgressModel, {foreignKey: 'id'});


export default StudentModel;
