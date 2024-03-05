import amqp from "../../index.mjs";

export default class ordersQueue extends amqp {
    name;
    options;
    constructor(connection) {
        super(connection);
        this.name = 'orders';
        this.options = {
            durable: true
        };
    }
};

