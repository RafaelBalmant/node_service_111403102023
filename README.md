**Development**

For greater convenience, use the bash dev.sh command

**Manually Method**
you should start RabbitMQ so that the queues become available using the following command:

```bash
docker-compose up -d rabbitmq
```

It's essential to start RabbitMQ first because it's crucial for the service to function.

Afterward, run the Node.js service with the following command:

```bash
docker-compose up -d node
```

You will notice that this command exits the service after running it. So, if you wish to view the logs of the same, use the following command:

```bash
docker-compose logs -f <service_name>
```

Replace `<service_name>` with the actual name of the service you want to monitor the logs for.

#### Access Rabbitmq Admin

```bash
 http://localhost:15672
 username: guest
 password: guest
```

#### Access PG Admin

```bash
 http://localhost:8080/
 username: postgres
 password: password
```
