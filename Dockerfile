FROM node:alpine AS build

WORKDIR /app

COPY package.json package-lock.json* yarn.lock ./

RUN npm install

COPY . .

RUN npm run build

FROM httpd:alpine

COPY --from=build /app/build/ /usr/local/apache2/htdocs/
