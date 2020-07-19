import { Request, Response } from 'express';

import Student from '../../database/models/students';


/**
 * @api {delete} /api/students/:id Delete Student
 * @apiName DeleteStudent
 * @apiGroup Students
 *
 * @apiParam {Number} id          Students unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "status": "Ok",
 *          "message": "Deleted"
 *     }
 *
 * @apiError StudentNotFound The id of the Student was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "Error",
 *       "message": "Student id not found"
 *     }
 */
export const deleteStudent = (req: Request, res: Response): void => {
  Student.destroy({
    where: {
      id: req.params.id,
    },
  }).then((deleted) => {
    if (deleted === 1) {
      res.json({status: 'Ok', message: 'Deleted'});
    } else {
      console.error('Error: student id not found');
      res.status(404).json({status: 'Error', message: 'Student id not found'});
    }
  }).catch((err)=>{
    console.error(err);
    res.status(500).json({status: 'Error', message: err});
  });
};

export default deleteStudent;
