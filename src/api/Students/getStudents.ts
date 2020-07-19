import { Request, Response } from 'express';

import Student from '../../database/models/students';


/**
 * @api {get} /api/students/:id Get Student
 * @apiName GetStudent
 * @apiGroup Students
 *
 * @apiParam {Number}       id Students unique ID.
 *
 * @apiSuccess {Number}     id Students unique ID..
 * @apiSuccess {String}     firstname Firstname of the User.
 * @apiSuccess {String}     lastname  Lastname of the User.
 * @apiSuccess {Number}     progressId Progress of the Student.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "id": "4",
 *          "firstname": "Guy",
 *          "lastname": "Buckridge",
 *          "progressId": 4,
 *          "createdAt": "2020-07-05T22:28:56.000Z",
 *          "updatedAt": "2020-07-05T22:28:56.000Z"
 *     }
 *
 * @apiError StudentNotFound The id of the Student was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "Error",
 *       "message": "Students id not found"
 *     }
 */
const getStudents = (req: Request, res: Response): void => {
  Student.findOne({
    where: {
      id: req.params.id,
    },
  }).then((student) => {
    if (student) {
      res.json(student);
    } else {
      console.error('Error: student id not found');
      res.status(404).json({status: 'Error', message: 'Student id not found'});
    }
  }).catch((err)=>{
    console.error(err);
    res.status(500).json({status: 'Error', message: err});
  });
};

export default getStudents;
