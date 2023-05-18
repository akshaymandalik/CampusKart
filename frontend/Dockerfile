FROM node:14

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

ENV PORT=4200

RUN npm cache clean

EXPOSE $PORT

COPY . /app

RUN npm install


CMD npm start
