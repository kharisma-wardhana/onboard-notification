const nodemailer = require('nodemailer');

class MailSender {
    constructor() {
        this._transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_ADDRESS,
                pass: process.env.MAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    }

    sendEmail(targetEmail, content) {
        console.log(`Sending email to ${targetEmail} with content ${content}`);
        const message = {
            from: 'Onboarding Apps',
            to: targetEmail,
            subject: 'Notification',
            text: content,
        };

        return this._transporter.sendMail(message);
    }
}

module.exports = MailSender;