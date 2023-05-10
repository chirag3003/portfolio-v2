import {NextApiRequest, NextApiResponse} from "next";
import nodemailer from "nodemailer"
import * as process from "process";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!(req.method === "POST")) {
        return res.status(404)
    }
    const {name = "", email = "", phoneNumber = "", message = ""} = req.body
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL,
            pass: process.env.PASSWORD,
        },
    });
    let error = false
    await new Promise((resolve,reject) => {
        transporter.sendMail(
            {
                from: process.env.GMAIL,
                to: "me@chirag.codes",
                subject: `Sir, you have received a mail from ${name}`,
                html: "<div style='width:100%;'><div style='width:100%;background-color:rgb(202 138 4 );padding:20px'>" +
                    `<h1>Email: ${email}</h1><h1>Phone Number: ${phoneNumber}</h1><h1>Message:</h1><h2>${message}</h2>` +
                    "</div></div>",
            },
            function (err, info) {
                if (err) {
                    console.error(err);
                    reject(err)
                }else{
                    resolve({})
                }
            }
        );
    }).catch((err) => {
        error = true
        return res.status(500)
    })

    if (!error)
        return res.status(200).send({})
}