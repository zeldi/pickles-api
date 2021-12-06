import { Express,Request, Response } from "express";
import * as userController from './controller/userController'
// import { createUserSchema } from "./model/user"
// import { validate } from "./middleware";

export default function(app: Express) {
    app.get('/', userController.welcome)
    app.post('/api/data', userController.addUser)

    // Get Data and Send to Email
    // POST /api/addData
    // app.post("/api/data", validateRequest())


}