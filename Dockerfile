FROM node:16.17.0
WORKDIR /backend
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "start"]