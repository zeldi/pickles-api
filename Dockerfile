FROM node:lts-alpine as ts-compiler
WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN yarn install
COPY . ./
RUN yarn run build
ENTRYPOINT [ "node","dist/src/app.js"]


# FROM node:lts-alpine as ts-remover
# WORKDIR /usr/app
# COPY --from=ts-compiler /usr/app/package*.json ./
# COPY --from=ts-compiler /usr/app/dist ./
# RUN yarn install --only=production

# FROM gcr.io/distroless/nodejs:16
# WORKDIR /usr/app
# COPY --from=ts-remover /usr/app ./
# USER 1000
# CMD ["app.js"]
