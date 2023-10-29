FROM node:20.9.0 as builder

COPY . /app

WORKDIR /app

RUN npm install

RUN npm run build

FROM nginx:1.17.10-alpine

EXPOSE 80

COPY --from=builder /app/dist/angular-app /usr/share/nginx/html

