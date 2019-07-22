var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get("/contact", function(req, res) {
    console.log(req.body)
  });

router.post('https://agile-citadel-20170.herokuapp.com/api/form', (req, res) => {
    console.log(req.body)

    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3> Contact Details</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
        <li>Zip: ${req.body.zip}</li>
        <li>Referral: ${req.body.select}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            service: "gmail",
            // no port needed for gmail
            auth: {
                user: process.env.NODEMAILER_ADDRESS,
                pass: process.env.NODEMAILER_PASSWORD
            }
        })

        let mailOptions = {
            from: 'form@form.com',
            to: process.env.NODEMAILER_ADDRESS,
            subject: 'You Have A New Contact',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log("Message Sent: %s", info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    });
});

module.exports = router;