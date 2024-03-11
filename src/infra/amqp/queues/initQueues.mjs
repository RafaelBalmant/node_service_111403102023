import connect from "../connect.mjs";
import orders from "./orders/index.mjs";
import shipments from "./shipments/index.mjs";

/**
   * This file is responsible for starting all the dependencies necessary for the operation of the queues at the AMQP communication level.
   * @param {object} connection - The connection object that is created by the amqplib.connect() method.
*/


async function initQueues() {

    try {
        const connection = await connect();

        const ordersQueue = new orders(connection);
        const shipmentsQueue = new shipments(connection);

        await ordersQueue.createQueue(ordersQueue.name, ordersQueue.options);
        await shipmentsQueue.createQueue(shipmentsQueue.name, shipmentsQueue.options);

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
