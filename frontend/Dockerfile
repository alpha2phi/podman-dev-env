# https://pnpm.io/docker
# https://github.com/ifeelBALANCED/effector-vite-template/blob/main/Dockerfile
FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

RUN pnpm install
EXPOSE 5173
CMD ["pnpm", "run", "dev"]

