# ─── STAGE 1: BASE ENVIRONMENT ───────────────────────────────────────────────────

FROM node:12.16.1-alpine as base
WORKDIR /usr/src/app

# Dependencies
ENV NODE_ENV development
COPY package*.json ./
RUN npm install

COPY index.ts tsconfig.json nodemon.json ./


# ─── STAGE 2: COMPILE TYPESCRIPT ─────────────────────────────────────────────────

FROM base as build

COPY ./src ./src
RUN npm run ts-compile


# ─── STAGE 3: BUILD FRONTEND ─────────────────────────────────────────────────────

FROM node:12.16.1-alpine as build-front
WORKDIR /usr/src/app

COPY frontend/package.json frontend/yarn.lock frontend/tsconfig.json ./
RUN yarn install

COPY frontend/.env.* ./
COPY frontend/public ./public
COPY frontend/src ./src
RUN yarn build


# ─── STAGE 4: PRODUCTION ENVIRONMENT ─────────────────────────────────────────────

FROM node:12.16.1-alpine
WORKDIR /usr/src/app

# Dependencies (only production)
ENV NODE_ENV production
COPY package*.json ./
RUN npm install --only=prod

# Copy files
COPY --from=build /usr/src/app/build ./
COPY --from=build-front /usr/src/app/build ./src/static

# Launch
CMD ["node", "index.js"]
