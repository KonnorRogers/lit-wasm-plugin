const esbuild = require('esbuild');
// const { NodeModulesPolyfillPlugin } = require('@esbuild-plugins/node-modules-polyfill')
const { polyfillNode } = require("esbuild-plugin-polyfill-node");

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    bundle: true,
    sourcemap: true,
    minify: false, // might want to use true for production build
    plugins: [
      // NodeModulesPolyfillPlugin({
			  // modules: {
			    // crypto: true
			  // },

      // })
      polyfillNode({
      	polyfills: {
      	  crypto: true
      	}
      })
    ], // include this if you need some node support
    format: 'cjs', // needs to be CJS for now
    platform: "node",
    target: ['es2020'] // don't go over es2020 because quickjs doesn't support it
  })
