# syntax=docker/dockerfile:1

# ---------- builder: install deps + build the docs app ----------
FROM node:20-alpine AS builder
RUN corepack enable
WORKDIR /app

# Copy only dependency manifests first for better layer caching.
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/docs/package.json ./apps/docs/
COPY packages/ui/package.json ./packages/ui/

RUN pnpm install --frozen-lockfile

# Now copy the rest of the monorepo and build.
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# ---------- runner: minimal production image ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0 \
    PORT=3000

RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Next.js standalone output: server.js + traced node_modules, portable bundle.
COPY --from=builder --chown=nextjs:nodejs /app/apps/docs/.next/standalone ./
# static/ and public/ are NOT included in the standalone output; copy them alongside.
COPY --from=builder --chown=nextjs:nodejs /app/apps/docs/.next/static ./apps/docs/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/docs/public ./apps/docs/public

USER nextjs
EXPOSE 3000

CMD ["node", "apps/docs/server.js"]
