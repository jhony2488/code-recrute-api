FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm install -g ts-node-dev

RUN npm install typescript -g

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]

