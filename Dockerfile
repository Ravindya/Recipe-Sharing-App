# Use Node.js 18 as the base image to build the Angular app
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Use an Nginx image to serve the Angular app
FROM nginx:alpine
COPY --from=build /app/dist/recipe-sharing /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

