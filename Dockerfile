FROM node:8.1.2-alpine

RUN mkdir app
WORKDIR app

ADD package.json .
RUN npm i

ADD . .

EXPOSE 8000

CMD ["npm", "run", "dev"]
