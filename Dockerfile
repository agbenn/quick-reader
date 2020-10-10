FROM node:13-alpine as build
WORKDIR /app
COPY package*.json /app/
RUN npm install -g @ionic/cli
RUN npm install
COPY ./ /app/
RUN ionic build --prod
EXPOSE 8100
ARG request_url_arg=https://news-reader-api-wu5pvfaq4a-uc.a.run.app
ENV request_url=$request_url_arg
CMD [ "node", "server.js" ]

# CMD ["ionic", "serve","--prod", "--consolelogs","--disableHostCheck", "true",  "-p", "8100:8100", "--host", "0.0.0.0"]


