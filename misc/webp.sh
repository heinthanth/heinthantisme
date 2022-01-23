#!/usr/bin/env bash

ROOT=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )/../" &> /dev/null && pwd )
find $ROOT -iname '*.png' | while read -r line; do cwebp $line -q 100 -o ${line%.*}.webp; done
