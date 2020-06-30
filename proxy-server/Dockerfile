FROM node:12.16.3

WORKDIR /app

COPY package.json ./
RUN yarn install
COPY ./ ./
RUN yarn build

CMD ["yarn", "start"]
