import amqp from "../../index.mjs";

export default class shipmentsQueue extends amqp {
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