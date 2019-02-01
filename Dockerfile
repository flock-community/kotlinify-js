FROM node:11

WORKDIR /app

### Install npm packages global
RUN npm i -g npm

EXPOSE 8080
