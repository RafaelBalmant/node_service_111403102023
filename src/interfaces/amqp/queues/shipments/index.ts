import { Connection } from "amqplib";
import Queue from "../queue";

export default class ShipmentsQueue extends Queue {
    constructor(connection: Connection) {
        super(connection, 'shipments', { durable: true })
    }
};