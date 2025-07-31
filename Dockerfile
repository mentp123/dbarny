
# Sample Dockerfile for NodeJS Apps

FROM node:12-alpine

ENV NODE_ENV=production

WORKDIR /dgjthd8791789tovnuh

# Install dependencies first
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy the entire application code
COPY . .

EXPOSE 4000

CMD [ "node", "server.js" ]
