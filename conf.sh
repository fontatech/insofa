#!/bin/bash

ENV_NAME=DEV

echo "Ambiente: $ENV_NAME"
echo

if [ $ENV_NAME == "DEV" ]
then
    jade templates/ --out public/ --watch &
    compass watch &
fi

echo "Processes started"
wait
