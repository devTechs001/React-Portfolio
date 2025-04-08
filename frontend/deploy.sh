#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
touch .nojekyll

# initialize git and push to gh-pages branch
git init
git checkout -b main
git add -A
git commit -m 'deploy'

# replace with your GitHub repo URL
git push -f https://github.com/devTechs001/React-Portfolio-v.git main:gh-pages

cd -