import { Request, Response } from 'express';

import Student from '../../database/models/students';


/**
 * @api {post} /api/students Add Student
 * @apiName AddStudent
 * @apiGroup Students
 *
 * @apiParam {String} firstname       Firstname of the Student.
 * @apiParam {String} lastname        Lastname of the Student.
 * @apiParam {Number} progressId      Progress of the Student.
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
 *       "message": "Сannot add student"
 *     }
 */
export const updateStudent = (req: Request, res: Response): void => {
  Student.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    progressId: req.body.progressId,
  }).then((student) => {
    if (student) {
      res.json(student);
    } else {
      console.error('Error: student id not found');
      res.status(404).json({ status: 'Error', message: 'Сannot add student' });
    }
  }).catch((err) => {
    console.error(err);
    res.status(500).json({ status: 'Error', message: err });
  });
};


export default updateStudent;
