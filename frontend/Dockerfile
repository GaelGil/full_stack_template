# Use a Debian-based Node image to avoid musl-related issues
FROM node:22-slim

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
