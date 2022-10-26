npm run deploy

if fails:
change "deploy" in package.json to "gh-pages-clean gh-pages -d build"
run "npm run deploy" again
change "deploy" back to "gh-pages -d build"
run "npm run deploy" again

should be good