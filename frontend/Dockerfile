FROM node:20.12.2-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm audit fix

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
