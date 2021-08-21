const express = require("express");
const app = express();
const nodemailer = require("nodemailer")
const { config } = require('dotenv');
const PORT = process.env.PORT || 3000;

config();

//middleware
app.use(express.static("public"))
app.use(express.json());

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html")
});

app.post("/", (req, res)=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:  process.env.GMAIL_ADD,
            pass:  process.env.GMAIL_PASS,
        }
        
        });
      
    const mailOptions = {
        from: req.body.email,
        to: "ehianetaehis@gmail.com",
        subject: `Message from ${req.body.name}`,
        text: req.body.message,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            res.send('error');
        }else{
            res.send('Email sent: ' + info.response)
        }
    })

})


app.listen(PORT, () =>{
    console.log("Listening on port 3000...")
})



