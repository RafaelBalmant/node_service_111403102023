import amqp from "../../index";

export default class shipmentsQueue extends amqp {
    name: string;
    options: {
        durable: boolean;
    };
    constructor(connection) {
        super(connection);
        this.name = 'shipments';
        this.options = {
            durable: true
        };
    }
};