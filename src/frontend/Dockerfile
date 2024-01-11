FROM node:18-alpine
WORKDIR /usr/app

COPY ./ /usr/app/
RUN npm i
RUN npm run build

EXPOSE 3000
USER node
CMD [ "npm", "run", "prod" ]