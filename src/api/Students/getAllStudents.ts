import { Request, Response } from 'express';

import Student from '../../database/models/students';


/**
 * @api {get} /api/students Get All Students
 * @apiName GetAllStudents
 * @apiGroup Students
 *
 * @apiSuccess {Number}     id Students unique ID.
 * @apiSuccess {String}     firstname Firstname of the Student.
 * @apiSuccess {String}     lastname Lastname of the Student.
 * @apiSuccess {Number}     progressId Progress of the Student.
 * @apiSuccess {Datetime}   createdAt Create of the Student.
 * @apiSuccess {Datetime}   updatedAt Last update.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *          "id": "4",
 *          "firstname": "Guy",
 *          "lastname": "Buckridge",
 *          "progressId": 4,
 *          "createdAt": "2020-07-05T22:28:56.000Z",
 *          "updatedAt": "2020-07-05T22:28:56.000Z"
 *      },
 *     ]
 *
 * @apiError StudentNotFound The id of the Student was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "Error",
 *       "message": "Students not found"
 *     }
 */
const getAllStudents = (req: Request, res: Response): void => {
  Student.findAll({
    limit: 20,
    order: [
      ['id', 'ASC'],
    ],
  }).then((students) => {
    if (students) {
      res.json(students);
    } else {
      console.error('Error: students not found');
      res.status(404).json({ status: 'Error', message: 'Students not found' });
    }
  }).catch((err) => {
    console.error(err);
    res.status(500).json({ status: 'Error', message: err });
  });
};

export default getAllStudents;
