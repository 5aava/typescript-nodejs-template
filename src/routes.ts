import express from 'express';


import MiddlewareController from './controllers/middleware';
import { check } from 'express-validator';

import getAllStudents from './api/Students/getAllStudents';
import getStudents from './api/Students/getStudents';
import addStudents from './api/Students/addStudents';
import updateStudents from './api/Students/updateStudents';
import deleteStudents from './api/Students/deleteStudents';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../public/swagger/swagger.json';


const router = express.Router();

// cors


// swagger
router.use('/swagger', swaggerUi.serve);
router.get('/swagger', swaggerUi.setup(swaggerDocument));


// students
router.get('/api/students', getAllStudents);

router.get('/api/students/:id', getStudents);

router.post('/api/students', [
  check('firstname').exists().isLength({ min: 2, max: 50 }),
  check('lastname').exists().isLength({ min: 2, max: 50 }),
], MiddlewareController, addStudents);

router.put('/api/students/:id', [
  check('firstname').exists().isLength({ min: 2, max: 50 }),
  check('lastname').exists().isLength({ min: 2, max: 50 }),
], MiddlewareController, updateStudents);

router.delete('/api/students/:id', deleteStudents);


export default router;
