FROM node:8.12.0-alpine as builder
WORKDIR /home
COPY . .
RUN yarn install && npm run build-prod

FROM nginx:1.15.5-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /home/dist/excelplay/. .