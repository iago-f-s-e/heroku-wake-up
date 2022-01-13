FROM node:16

WORKDIR /home/app/heroku-wake-up-app
COPY package.json .
RUN yarn install
COPY . .
CMD yarn start
