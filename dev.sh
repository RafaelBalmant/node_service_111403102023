docker stop node_service_111403102023_node_1
docker stop node_service_111403102023_rabbitmq_1

docker-compose up -d rabbitmq
echo "Waiting for RabbitMQ to start"
sleep 5 # wait for rabbitmq to start

docker-compose up -d node

docker-compose logs -f node