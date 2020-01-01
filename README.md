# Basic express api

```
yarn dev
yarn lint
yarn test
```

# Topic

```
yarn global add nodemon
yarn add express
yarn add cors morgan nodemon
```

### ESLint

対象外とするファイルは``.eslintignore``に記述

```
yarn add -D eslint
# JavaScript Standard Style
yarn add -D eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
# create rc & test
node_modules\.bin\eslint --init
```

### Jest

``.eslintrc.js``に``env.jest: true``を追記する

```
yarn add -D jest supertest
# create setting
node_modules.\.bin\jest --init
```
