# Imagen base
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar proyecto
COPY . .

# Generar prisma
RUN npx prisma generate

# Build
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]