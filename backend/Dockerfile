FROM node:14

RUN mkdir -p /app

WORKDIR /app

COPY package.json  /app


RUN npm install

COPY . /app

EXPOSE 5000

# # Set environment variables
# ENV MONGO_URI=mongodb+srv://Akshay:9eDFgdRgFoCIWNuL@cluster0.0zanqqt.mongodb.net/CampusKart?retryWrites=true&w=majority
# ENV PORT=3000

CMD npm start
