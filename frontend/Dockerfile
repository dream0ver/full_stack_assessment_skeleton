FROM node:22-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN npm install 

RUN npm install serve -g

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["serve","./dist"]