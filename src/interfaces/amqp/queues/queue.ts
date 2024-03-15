import { IQueue } from "./IQueue";

export default class Queue implements IQueue {
    name: string;
    options: any;
    connection: any;
    constructor(connection: any, name: string, options: any) {
        this.connection = connection;
        this.name = name;
        this.options = options;
        this.createQueue()
    }

    async createQueue(): Promise<any> {
        const channel = await this.connection.createChannel();
        const newQueue = channel.assertQueue(this.name, this.options);
        console.log("created queue: ", this.name);
        return newQueue;
    }

    consumeQueue(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve("consume queue")
        })
    }

    publishQueue(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve("publishQueue")
        })
    }
}