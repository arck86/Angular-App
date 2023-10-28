FROM nginx:1.17.1-alpine

COPY /dist/angular-app /usr/share/ngnix/html

EXPOSE 4200

