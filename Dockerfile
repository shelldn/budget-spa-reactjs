FROM node:latest AS build-env
WORKDIR /code

COPY . ./
RUN npm i -g npm@latest
RUN npm i --loglevel=error
RUN npm run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=build-env /code/build ./
