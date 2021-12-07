import { Express,Request, Response } from "express";
import * as userController from './controller/userController'

export default function(app: Express) {
    app.get('/', userController.welcome)
    app.get('/healthz',userController.checkHealth)
    app.post('/api/data', userController.addUser)
}