class NotifListener {
    constructor(mailSender) {
        this._mailSender = mailSender;
        this.sendNotif = this.sendNotif.bind(this);
    }

    async sendNotif(message) {
        try {
            const { targetEmail, content } = JSON.parse(message.content.toString());
            console.log(`Received data : ${message.content.toString()}`);
            const result = await this._mailSender.sendEmail(
                targetEmail,
                JSON.stringify(content)
            );
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = NotifListener;