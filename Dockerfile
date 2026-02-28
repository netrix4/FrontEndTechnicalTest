FROM node:20-alpine AS builder
WORKDIR /app

# Install depencies to get Node to work
COPY package*.json ./
RUN npm install

# Copies NextJS app to working directory
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app ./

EXPOSE 3000

# Ensure prisma get databse information as well as configurations
CMD npx prisma generate && npx prisma db push --accept-data-loss && npm run start