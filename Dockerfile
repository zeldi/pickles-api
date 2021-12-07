FROM node:lts-alpine
WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN yarn install
COPY . ./
RUN yarn run build
ENTRYPOINT [ "node","dist/src/app.js"]
