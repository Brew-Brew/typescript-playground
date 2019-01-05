# Typescript with react & webpack

> https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

- @types/ prefix means that we also want to get the declaration files for React and React-DOM. 

- awesome-typescript-loader helps Webpack compile your TypeScript code using the TypeScript’s standard configuration file named tsconfig.json
    - awesome-typescript-loader is not the only loader for typescript. You could instead use ts-loader.

- source-map-loader uses any sourcemap outputs from TypeScript to inform webpack when generating its own sourcemaps