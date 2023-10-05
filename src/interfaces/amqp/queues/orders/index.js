const amqp = require("../../index");

class ordersQueue extends amqp {
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

module.exports = ordersQueue;