const amqp = require('amqplib');

class MessageService {
    constructor() {
        this._sendMessage = this.sendMessage.bind(this);
    }

    async sendMessage(queue, message) {
        const connection = await amqp.connect('amqp://guest:guest@broker:5672');
        const channel = await connection.createChannel();
        await channel.assertQueue(queue, {
            durable: true
        });

        await channel.sendToQueue(queue,
            Buffer.from(JSON.stringify(message))
        );

        setTimeout(() => {
            connection.close();
        }, 1000);
    }
}

module.exports = MessageService