FROM node:22.14.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g corepack 

RUN corepack enable yarn

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]