import { Connection } from "amqplib";
import connect from "../connect";
import orders from "./orders";
import shipments from "./shipments";

/**
   * This file is responsible for starting all the dependencies necessary for the operation of the queues at the AMQP communication level.
   * @param {object} connection - The connection object that is created by the amqplib.connect() method.
*/


async function initQueues() {

    try {
        const connection: Connection = await connect();

        const ordersQueue = new orders(connection);
        const shipmentsQueue = new shipments(connection);

        await ordersQueue.createQueue();
        await shipmentsQueue.createQueue();

        return {
            ordersQueue,
            shipmentsQueue
        }

    } catch (error) {
        console.log(error);
        throw new Error("something in the amqp layer went wrong");
    }
}

export default initQueues;
