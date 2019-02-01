FROM node:11

WORKDIR /app

### Install npm packages global
RUN npm i -g npm rimraf

EXPOSE 8080
