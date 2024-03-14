import initQueues from './infra/amqp/queues/initQueues';

(async () => {
    const { ordersQueue } = await initQueues();

    console.log("app starts");
})();
