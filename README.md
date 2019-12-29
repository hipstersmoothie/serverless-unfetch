Setup:

```sh
yarn
yarn build
```

Error:

```
➜ yarn build
yarn run v1.15.2
$ next build
Creating an optimized production build

Compiled with warnings.

./node_modules/node-fetch/lib/index.js
Module not found: Can't resolve 'encoding' in '/Users/alisowski/Documents/api-routes-app/node_modules/node-fetch/lib'

Automatically optimizing pages

Page                    Size
─ ○ /                   275 B
+ shared by all         68.4 kB
  ├ chunks/commons.js   62.6 kB
  ├ runtime/main.js     5.06 kB
  └ runtime/webpack.js  746 B

λ  (Lambda)  server-side renders at runtime (uses getInitialProps or getServerProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)

✨  Done in 4.18s.
```
