import { Request, Response } from "express";
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import createEmailTemplate from "../utils/createEmailTemplate";
import log from "../logger"
dotenv.config()

export let welcome = (req: Request, res: Response) => {
  res.send("Welcome to Pickle API");
};

export let addUser = (req: Request, res: Response) => {
    const {id, name, email } = req.body

   // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      // @ts-ignore
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // generated ethereal user
        pass: process.env.SMTP_PASSWORD, // generated ethereal password
      },
    });

    // prepare email
    const mailOptions = {
      from: "zeldi.suryady@gmail.coom", // sender address
      to: email, // list of receivers
      subject: "[Pickles Auction] Data Received", // Subject line
      text: "TEST", // plain text body
      html: createEmailTemplate(id,name,email), // html body
    };    

    // send mail with defined transport object
    transporter.sendMail(mailOptions,async(error,info)=>{
      if(error) {
        log.error(error);
        return res.status(500).json({
          message: "Server Error"
        });
      }
      return res.status(200).json({
        message: "Data has been received"
      })
    });

  };
  
