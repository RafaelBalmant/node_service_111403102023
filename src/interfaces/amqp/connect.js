const amqplib = require("amqplib");

async function connect()  {
    try {
      const connection = await amqplib.connect("amqp://rabbitmq:5672");
      return connection;
    } catch(error) {
      console.log(error)
    }
  }

  module.exports = connect;