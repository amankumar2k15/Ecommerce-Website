FROM node:16-alpine
WORKDIR /app
COPY package*.json .
RUN npm cache clean --force
RUN npm install
COPY . .
EXPOSE 8800
CMD [ "npm", "start" ]