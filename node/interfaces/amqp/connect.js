const amqplib = require("amqplib");

async function connect()  {
    try {
      const connection = await amqplib.connect("amqp://rabbitmq:5672");
      return connection;
    } catch(error) {
      if (this.retryStarted < 5 ){
        this.retryStarted++;
        console.log("Retrying AMQP");
        await new Promise(resolve => setTimeout(resolve, 5000));
        await connection("amqp://rabbitmq:5672");
      } else {
        console.log(error)
        throw new Error("something in the amqp layer went wrong");
      }
    }
  }

  module.exports = connect;