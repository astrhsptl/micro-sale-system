FROM node:18-alpine as build

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

FROM nginx:alpine

RUN apk upgrade --no-cache && \
    apk add --no-cache libgcc libstdc++

COPY ./.deploy/nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "'daemon off;'"]