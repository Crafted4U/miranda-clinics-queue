# ---------- Build Stage ----------
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@11.11.0 && npm ci

COPY . .

RUN npm run build

# ---------- Production Stage ----------
FROM nginx:alpine

COPY --from=build /app/dist/miranda-clinics-web/browser/ /usr/share/nginx/html/

EXPOSE 80
