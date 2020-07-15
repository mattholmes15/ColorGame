FROM nginx:alpine

COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
COPY colorgame.html index.html

VOLUME ["/usr/share/nginx/html"]

LABEL maintainer="M1R5H"
