#!/bin/bash

awslocal s3 mb s3://my-bucket
awslocal sqs create-queue --queue-name my-queue