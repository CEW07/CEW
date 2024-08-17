import nodemailer from "nodemailer";

export default async function submitEmail(req, res) {

  let testAccount = await nodemailer.createTestAccount();
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    await transporter
      .sendMail({
        from: "amaanq08@gmail.com",
        to: "kazimuqtasid@gmail.com",
        subject: "Hello ✔",
        text: "Hello world?",
      })
      .then((res) => {
        return res.status(201).json(
            {
                 msg: "You recieved an email ",
                 info:info.messageId,
                 preview:nodemailer.getTestMessageUrl(info)

             }
        
        );
      })
      .catch((error) => {
        return res.status(500).json({ error: error });
      });
    res.send("It is working");
  } catch (error) {
    console.log("Error could not send the mail", error);
    res.send("It is not working");
  }
}
