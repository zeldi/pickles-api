import { Express,Request, Response } from "express";
import * as userController from './controller/userController'

export default function(app: Express) {
    app.get('/', userController.welcome)
    app.post('/api/data', userController.addUser)
}