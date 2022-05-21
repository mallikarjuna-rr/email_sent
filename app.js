require('dotenv').config();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_USERNAME,
        pass:process.env.EMAIL_PASSWORD
    }
});

const mailOptions = {
    from:process.env.EMAIL_USERNAME,
    to:"Receiver Mail Address",
    subject:"Hello",
    html: `
      <div
        class="container"
        style="max-width: 90%; margin: auto; padding-top: 20px"
      >
        <h2>This is a testing email</h2>
        <p>Please ignore this mail</p>
        <p>sent</p>
      </div>  `
};

const info = async() => {
    await transporter.sendMail(mailOptions,(err,data)=> {
        if(err) {
            console.log("error.....",err.msg)
        }
        console.log("data....",data)
    })
};

info();