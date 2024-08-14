// emailService.js
const express = require('express');
const nodemailer = require('nodemailer');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: false,
    auth: {
        user: config.smtp.user,
        pass: config.smtp.pass,
    },
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: 'New Contact Form Message',
        text: message,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending email:', err);
            if (err.response) {
                return res.status(500).json({ message: `Failed to send email: ${err.response}` });
            }
            return res.status(500).json({ message: 'Something went wrong. Please connect with me via LinkedIn or X linked below 👇' });
        }
        res.status(200).json({ message: "Thank you kindly for your message! I'll be in touch 🥰", messageId: info.messageId });
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
