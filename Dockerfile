FROM node:alpine
WORKDIR /sky-remote-api
RUN apk add --update git && \
  rm -rf /tmp/* /var/cache/apk/*
RUN git clone https://github.com/davidjtipping/sky-remote-api.git . && \
  npm install
EXPOSE 3000
CMD ["node","/sky-remote-api/server.js","--hostname=localhost","--port=3000","--net=host"]


