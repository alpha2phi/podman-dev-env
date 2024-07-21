FROM amazoncorretto:20-alpine-jdk

ARG APP_DIR=/java

ENV WORK_DIR=/app
WORKDIR ${WORK_DIR}

RUN apk update --no-cache \
  && apk upgrade --no-cache libcrypto3 libssl3 \
  && apk add --update bash --no-cache \
  && rm -rf  /var/cache/apk/* 

ADD ${APP_DIR}/build/libs/*.jar app.jar
ADD ${APP_DIR}/scripts/entrypoint.sh entrypoint.sh
ADD https://dtdg.co/latest-java-tracer dd-java-agent.jar

RUN adduser -D -u 1000 app
RUN chown -R 1000 /app

USER 1000

EXPOSE 8080

ENTRYPOINT ["./entrypoint.sh"]
