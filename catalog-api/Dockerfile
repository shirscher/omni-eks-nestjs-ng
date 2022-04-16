FROM node:16.14-alpine3.15 as build

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16.14-alpine3.15 as production

ARG APP_VERSION=1.0.0
ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}
ENV NESTJS_PORT=8080

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install --only=production && rm ./package*.json

COPY --from=build /usr/app/dist ./

USER node

ENV APP_VERSION=${APP_VERSION}

CMD ["node", "main.js"]