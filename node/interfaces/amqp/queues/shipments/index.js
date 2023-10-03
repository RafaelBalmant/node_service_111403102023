const amqp = require("../../index");

class shipmentsQueue extends amqp {
    name;
    options;
    constructor(connection) {
        super(connection);
        this.name = 'shipments';
        this.options = {
            durable: true
        };
    }
};

module.exports = shipmentsQueue;