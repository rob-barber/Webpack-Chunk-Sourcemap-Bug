# Webpack-Chunk-Sourcemap-Bug
Repository to show the current issue with Webpack building chunked bundles with sourcemaps.

## Recreate Issue
1. Install node packages `npm install`
2. run `npm run build` to build both bundles (main.js + second.js)
3. Open dist > index.html in any browser.
4. Open developer tools and examine the loaded files. 
    1. **Notice how there are source maps within the "webpack://" pseudo-path**
    
5. Open `webpack.config.js` and uncomment lines 36-41 (all lines pertaining to optimization)
6. run `npm run build` to build both bundles (main.js + second.js)
7. Open dist > index.html in any browser.
8. Open developer tools and examine the loaded files.
    1. **There are no longer any sourcemaps**
