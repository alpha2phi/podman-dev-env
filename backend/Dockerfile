# https://gist.github.com/usr-ein/c42d98abca3cb4632ab0c2c6aff8c88a
FROM python:3.12-slim-bullseye AS python-base

ENV PYTHONUNBUFFERED=1 \
  # prevents python creating .pyc files
  PYTHONDONTWRITEBYTECODE=1 \
  \
  # pip
  PIP_NO_CACHE_DIR=off \
  PIP_DISABLE_PIP_VERSION_CHECK=on \
  PIP_DEFAULT_TIMEOUT=100 \
  \
  # poetry
  # https://python-poetry.org/docs/configuration/#using-environment-variables
  POETRY_VERSION=1.8.2 \
  # make poetry install to this location
  POETRY_HOME="/opt/poetry" \
  # make poetry create the virtual environment in the project's root
  # it gets named `.venv`
  POETRY_VIRTUALENVS_IN_PROJECT=true \
  # do not ask any interactive question
  POETRY_NO_INTERACTION=1 \
  # increase request time out
  POETRY_REQUESTS_TIMEOUT=60 \
  \
  # paths
  # this is where our requirements + virtual environment will live
  PYSETUP_PATH="/opt/pysetup" \
  VENV_PATH="/opt/pysetup/.venv"

ENV PATH="$POETRY_HOME/bin:$VENV_PATH/bin:$PATH"

RUN apt-get -y update && \
  apt-get -y upgrade && \
  apt-get autoremove -y && \
  pip install --upgrade --no-cache-dir pip

FROM python-base AS builder-base

RUN pip install --default-timeout=60 "poetry==$POETRY_VERSION"

WORKDIR $PYSETUP_PATH
COPY $APP_DIR/poetry.lock $APP_DIR/pyproject.toml ./
RUN poetry lock --no-update
RUN poetry install --no-interaction --no-ansi --only main --no-root

FROM python-base as production
ENV FASTAPI_ENV=production
COPY --from=builder-base $PYSETUP_PATH $PYSETUP_PATH
WORKDIR /app
ENV PYTHONPATH=/app/app
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7001"]
