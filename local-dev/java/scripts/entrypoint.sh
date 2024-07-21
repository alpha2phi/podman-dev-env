#!/bin/bash

WORK_DIR=/app

JAVA_OPTS="${JAVA_OPTS} \
  -Djava.security.egd=file:/dev/urandom \
  -javaagent:${WORK_DIR}/dd-java-agent.jar"

exec java ${JAVA_OPTS} -jar ${WORK_DIR}/app.jar $JAVA_ARGS
