# 1️⃣ STEP: Dependencies Layer
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# 2️⃣ STEP: Builder Layer
FROM node:18-alpine AS builder
WORKDIR /app

# Copy deps
COPY --from=deps /app/node_modules ./node_modules

# ⬇️ Copy Prisma schema early for generation
COPY prisma ./prisma

# ⬇️ Generate Prisma Client
RUN npx prisma generate

# ⬇️ Now copy the rest of your app
COPY . .

# Build app
RUN npm run build

# 3️⃣ STEP: Runner Layer
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# Copy built output
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]