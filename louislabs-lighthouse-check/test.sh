#!/usr/bin/env bash

set -ex

docker run --rm --name lighthouse -it \
  -v /path/to/your/report:/home/chrome/reports \
  --cap-add=SYS_ADMIN femtopixel/google-lighthouse \
  http://www.example.com
