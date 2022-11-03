#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

mkdir -p dist
terser src/setImmediateLite.es5.js -cm | tr -d '\n' > dist/setImmediateLite.es5.min.js
terser src/setImmediateLite.es6.js -cm | tr -d '\n' > dist/setImmediateLite.es6.min.js
