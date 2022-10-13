#!/usr/bin/env bash

set -ex

npm install

$(npm bin)/cypress run
