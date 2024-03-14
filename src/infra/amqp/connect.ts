import amqplib from "amqplib";

export default async function connect()  {
    try {
      const connection = await amqplib.connect("amqp://rabbitmq:5672");
      return connection;
    } catch(error) {
      console.log(error)
    }
  }