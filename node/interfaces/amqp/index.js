const amqplib = require("amqplib");


class amqp {
  channel;
  connection;
  constructor(connection) {
    this.connection = connection;
  }
  
  async createQueue(name, type) {
    try {
      const channel = await this.connection.createChannel();
      const newQueue = channel.assertQueue(name, type);
      console.log("created queue: ", name);
      channel.close();
      return newQueue;
    } catch (error) {
      console.log(error);
      throw new Error("something in the amqp layer went wrong");
    }
  }
}

module.exports = amqp;
