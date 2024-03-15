
import connect from './interfaces/amqp/connect';
import OrdersQueue from './interfaces/amqp/queues/orders';
import ShipmentsQueue from './interfaces/amqp/queues/shipments';

(async () => {
    
    const connectionAmqp = await connect();
    const ordersQueue = new OrdersQueue(connectionAmqp);
    const shipmentsQueue = new ShipmentsQueue(connectionAmqp);

    const container = {
        infra: {
            amqp: {
                queues: {
                    ordersQueue,
                    shipmentsQueue
                }
            }
        }
    }
    return container;
})();
