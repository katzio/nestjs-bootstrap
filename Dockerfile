FROM node:19-alpine
RUN npm install -g typescript ts-node-dev ts-node source-map-support npm

RUN mkdir -p /app

COPY package*.json /app/

WORKDIR /app

RUN npm install --loglevel=warn

COPY . .

RUN npm run build