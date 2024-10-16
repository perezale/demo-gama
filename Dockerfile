FROM node:22.5.1-alpine
WORKDIR /app
COPY package-lock.json /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm", "run", "start"]
EXPOSE 3000