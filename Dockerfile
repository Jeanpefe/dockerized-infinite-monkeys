FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Utiliza una imagen base de Nginx para servir la app
FROM nginx:alpine

# Copia los archivos compilados en el directorio de Nginx (--from=build) significa copiar desde la etapa de build en la linea 1
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
