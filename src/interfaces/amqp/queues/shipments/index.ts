import { Connection, Options } from "amqplib";

export default class shipmentsQueue {
    name: string;
    options: Options.AssertQueue;
    connection: Connection;
    constructor(connection: Connection) {
        this.connection = connection;
        this.name = 'orders';
        this.options = {
            durable: true
        };
    }

    async createQueue(): Promise<any> {
        const channel = await this.connection.createChannel();
        const newQueue = channel.assertQueue(this.name, this.options);
        console.log("created queue: ", this.name);
        return newQueue;
    }
};