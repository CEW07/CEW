import nodemailer from "nodemailer";


export default async function submitEmail(req, res) {

    console.log(req.body);
    

//   let testAccount = await nodemailer.createTestAccount();
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.ethereal.email",
//       service: "gmail",
//       secure: true,
//       port: 465,
//       auth: {
//         user: testAccount.user,
//         pass: testAccount.pass,
//       },
//     });

//     async function main() {
//       // send mail with defined transport object
//       const info = await transporter.sendMail({
//         from: "amaanq08@gmail.com",
//         to: "kazimuqtasid@gmail.com",
//         subject: "Hello ✔",
//         text: "Hello world?",
//       });

//       console.log("Message sent: %s", info);
//     }
//     res.send("It is working");
//     main().catch(console.error);
//   } catch (error) {
//     console.log("Error could not send the mail", error);
//     res.send("It is not working");
//   }
}
