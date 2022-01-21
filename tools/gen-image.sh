#!/usr/bin/env bash

[[ $# -eq 1 ]] || { echo "this script need exact 1 argument - input image"; exit 1; }

DIRNAME=$(dirname -- "$1")
FULL_FILENAME=$(basename -- "$1")
FILENAME="${FULL_FILENAME%.*}"
EXTENSION="${FULL_FILENAME##*.}"

# to continue
