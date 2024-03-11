import initQueues from './infra/amqp/queues/initQueues.mjs';

const { ordersQueue } = await initQueues();

console.log(ordersQueue)