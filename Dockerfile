FROM node:20-bullseye

WORKDIR /client-app-keanu

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]