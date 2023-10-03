const connect = require("../connect");
const orders = require("./orders");
const shipments = require("./shipments");

async function initQueues() {

    async function createQueues () {
        const connection = await connect();

        const ordersQueue = new orders(connection);
        const shipmentsQueue = new shipments(connection);
        
        await ordersQueue.createQueue(ordersQueue.name, ordersQueue.options);
        await shipmentsQueue.createQueue(shipmentsQueue.name, shipmentsQueue.options);
    }

    try {
        await createQueues();
    } catch (error) {
        console.log(error);
        throw new Error("something in the amqp layer went wrong");
    }
}

module.exports = initQueues();