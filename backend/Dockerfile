FROM node:22-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

ENV PORT=3100
ENV DB_USER_NAME=db_user
ENV DB_NAME=home_db
ENV DB_USER_PASSWORD=6equj5_db_user
ENV DB_PORT=3306
ENV DB_HOST=localhost

EXPOSE 3100

CMD ["npm", "run", "start"]
