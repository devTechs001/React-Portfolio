# abort on errors
$ErrorActionPreference = "Stop"

# build
Set-Location frontend
npm run build

# navigate into the build output directory
Set-Location dist

# create .nojekyll file
New-Item -ItemType File -Path ".nojekyll" -Force

# initialize git and push to gh-pages branch
git init
git checkout -b main
git add -A
git commit -m 'deploy'

# replace with your actual GitHub repo URL
git push -f https://github.com/devTechs001/React-Portfolio-v.git main:gh-pages

Set-Location ..
Set-Location ..
