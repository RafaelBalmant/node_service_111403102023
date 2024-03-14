import initQueues from './interfaces/amqp/queues/initQueues';

(async () => {
    const { ordersQueue } = await initQueues();
    const container = {
        infra: {
            amqp: {
                queues: {
                    ordersQueue
                }
            }
        }
    }
    return container;
})();
