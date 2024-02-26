FROM node:16 as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM php:7.4-apache
RUN apt-get update && apt-get install -y git zip unzip
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY --from=build-stage /app/dist /var/www/html
COPY --from=build-stage /app/api /var/www/html/api
COPY .htaccess /var/www/html/.htaccess
WORKDIR /var/www/html/api
RUN composer install --no-dev --optimize-autoloader
WORKDIR /var/www/html

RUN a2enmod rewrite