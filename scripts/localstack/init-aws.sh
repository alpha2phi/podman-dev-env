#!/usr/bin/env bash
awslocal s3api create-bucket --bucket mystorage
awslocal sqs create-queue --queue-name myqueue
