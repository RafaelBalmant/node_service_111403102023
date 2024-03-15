import { Connection } from "amqplib";
import Queue from "../queue";

export default class OrdersQueue extends Queue {
    constructor(connection: Connection) {
        super(connection, 'orders', { durable: true })
    }
};

