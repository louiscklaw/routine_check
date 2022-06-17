#!/usr/bin/env bash

set -ex

docker run --rm --name lighthouse -it \
  -v $PWD/volumes/reports:/home/chrome/reports \
  --cap-add=SYS_ADMIN femtopixel/google-lighthouse \
  https://portfolio.iamon99.com/
