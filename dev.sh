loading() {
    local pid=$1
    local delay=0.1
    local spin='-\|/'

    while ps -p $pid > /dev/null; do
        local temp=${spin#?}
        printf " [%c]  " "$spin"
        local spin=$temp${spin%"$temp"}
        sleep $delay
        printf "\b\b\b\b\b\b"
    done

    printf "    \b\b\b\b"
}
echo "WARNING! - Stopping all running containers "
docker kill $(docker ps -q)

docker compose up -d rabbitmq
echo "Waiting for RabbitMQ to start"
sleep 5 & loading $! # wait for rabbitmq to start
docker compose up -d db
docker compose up -d pgadmin
docker compose up -d node
docker compose logs -f
