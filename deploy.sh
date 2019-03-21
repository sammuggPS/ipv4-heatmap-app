#!/usr/bin/env sh
# This deploy script was created based off of the GitHub Pages deploy docs for the vue-cli
# found here: https://cli.vuejs.org/guide/deployment.html#github-pages

set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:sammuggPS/ipv4-heatmap-app.git master:gh-pages
cd -
