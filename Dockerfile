FROM node:21
LABEL authors="laurenjacobs"

WORKDIR /app

COPY client/package.json ./client/
RUN npm install --prefix client/

COPY server/package.json ./server/
RUN npm install --prefix server/

COPY . .

WORKDIR /app/server

RUN npx prisma generate


RUN npm run build --prefix ../client/



EXPOSE 3001
# Start the app
CMD ["node", "index"]




