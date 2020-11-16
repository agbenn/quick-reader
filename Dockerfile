FROM node:13-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install -g @ionic/cli
RUN npm install
COPY ./ /app/
RUN ionic build --prod
EXPOSE 8100
CMD [ "node", "server.js" ]

