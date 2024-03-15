
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
echo 
echo " ⚠️ Would you like to reset the containers? (You will lose saved data)? (s/n) ⚠️"
read resposta 
if [ "$resposta" == "s" ]; then
    docker compose down rabbitmq db pgadmin node
fi
echo 
docker compose up -d rabbitmq 
echo 
echo "🐰 Waiting for RabbitMQ to start 🚀"
echo 
sleep 5 & loading $! # wait for rabbitmq to start
docker compose up -d db
docker compose up -d pgadmin
docker compose up -d node
docker compose logs -f node
