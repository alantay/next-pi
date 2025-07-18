# 1️⃣ STEP: Dependencies Layer
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./ 
RUN npm ci

# 2️⃣ STEP: Builder Layer
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Run the app
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Copy built app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]