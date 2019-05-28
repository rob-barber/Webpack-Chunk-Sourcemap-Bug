# Webpack-Chunk-Sourcemap-Bug
Repository to show the current issue with Webpack code splitting breaking code.

## Recreate Issue
1. Install node packages `npm install`
2. run `npm run build` to build the main.js
3. Open index.html in any browser.
4. No console output is shown.

### Note:
If we do not import anything into the index.js file we can see the output. 