FROM node:18

WORKDIR /var/projects/node

COPY . .
COPY package*.json .

RUN npm install
    
EXPOSE 8080

ENTRYPOINT [ "yarn", "dev" ]
