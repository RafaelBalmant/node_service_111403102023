/**
   * The purpose of this file is to facilitate communication between the package and our system, 
   * thereby adding an extra layer of security to enforce, monitor, or implement any necessary 
   * measures within the system.
   * @param {object} connection - The connection object that is created by the amqplib.connect() method.
*/

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
      return newQueue;
    } catch (error) {
      console.log(error);
      throw new Error("something in the amqp layer went wrong");
    }
  }
}

export default amqp;
