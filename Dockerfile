# Name the node stage "builder"
FROM node:18.13 as builder

RUN mkdir -p /usr/src/app

# Set working directory
WORKDIR /usr/src/app


# ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN npm install
RUN npm run build --prod

# nginx state for serving content
FROM nginx:1.20-alpine
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/
COPY --from=builder /usr/src/app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
