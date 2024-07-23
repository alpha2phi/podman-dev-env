# https://pnpm.io/docker
# https://github.com/ifeelBALANCED/effector-vite-template/blob/main/Dockerfile
FROM node:20-slim AS base

# https://docs.docker.com/reference/dockerfile/#arg
# ARG HTTP_PROXY
# ARG HTTPS_PROXY

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

ENV http_proxy=${HTTP_PROXY}
ENV https_proxy=${HTTPS_PROXY}
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
EXPOSE 5173
CMD ["pnpm", "run", "dev"]

