# Frontend-Engineering

🎉 Front-End-Engineering System

## Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Server](#running-server)
- [Running Tests](#running-tests)
- [Lint](#lint)
  - [Eslint](#eslint)
  - [Type](#type)
  - [Staged](#staged)
  - [Prettier](#prettier)
  - [Stylelint](#stylelint)
- [Building](#building)
- [Preview](#preview)
- [Commit](#commit)
- [Console Hacks](#console-hacks)
- [FAQ](#faq)

[//]: # 'MARKDOWN LINKS & IMAGES'
[Vue-3-url]: https://vuejs.org/
[Vue-3-img]: https://img.shields.io/badge/Vue.js%203x-%20?logo=VUEDOTJS&labelColor=FFFFF0&color=D3D3D3
[Vite-url]: https://vitejs.dev/
[Vite-img]: https://img.shields.io/badge/Vite-35495E?logo=vite&labelColor=FFFFF0&color=D3D3D3
[Vitest-url]: https://vitest.dev/
[Vitest-img]: https://img.shields.io/badge/Vitest-35495E?logo=vitest&labelColor=FFFFF0&color=D3D3D3
[Pinia-url]: https://pinia.vuejs.org/
[Pinia-img]: https://img.shields.io/badge/Pinia-f5ce38
[Typescript-url]: https://www.typescriptlang.org/
[Typescript-img]: https://img.shields.io/badge/Typescript-35495E?logo=typescript&labelColor=FFFFF0&color=D3D3D3
[ESLint-url]: https://eslint.org/
[ESLint-img]: https://img.shields.io/badge/ESLint-%20?logo=eslint&labelColor=442ab9&color=D3D3D3
[Stylelint-url]: https://stylelint.io/
[Stylelint-img]: https://img.shields.io/badge/Stylelint-35495E?logo=stylelint&labelColor=000000&color=D3D3D3
[Commitlint-url]: https://commitlint.js.org/
[Commitlint-img]: https://img.shields.io/badge/Commitlint-35495E?logo=commitlint&labelColor=000000&color=D3D3D3
[Prettier-url]: https://prettier.io/
[Prettier-img]: https://img.shields.io/badge/Prettier-%20?logo=prettier&labelColor=FFFFF0&color=D3D3D3

## Tech Stack

[![Vue][Vue-3-img]][Vue-3-url]
[![Vite][Vite-img]][Vite-url]
[![Vitest][Vitest-img]][Vitest-url]
[![Pinia][Pinia-img]][Pinia-url]
[![Typescript][Typescript-img]][Typescript-url]
[![ESLint][ESLint-img]][ESLint-url]
[![Stylelint][Stylelint-img]][Stylelint-url]
[![Commitlint][Commitlint-img]][Commitlint-url]
[![Prettier][Prettier-img]][Prettier-url]

## Prerequisites

Before getting started, please ensure that you have installed the following dependencies:

- Node.js >= 15.14.0
- Git

## Installation

You can install using Yarn

```bash
yarn install
```

## Running Server

```bash
yarn run dev
```

## Running Tests

Perform a single run for all tests without watch mode

```bash
yarn run test
```

or run only the test file without watch mode

```bash
yarn run test src/components/__test__/Hello.vue
```

<br>

Enter the watch mode in development environment and run mode in CI automatically

```bash
yarn run test:watch
```

or run only the test file with watch mode

```bash
yarn run test:watch src/components/__test__/Hello.vue
```

<br>

Enable coverage report

```bash
yarn run test:coverage
```

Silent console output from tests

```bash
yarn run test:silent
```

## Lint 🛠

### Eslint

Perform JavaScript syntax check on files of the following types: .vue, .js, .jsx, .cjs, .mjs, .ts, .tsx, .cts, .mts.

Check specified file, for example:

```bash
yarn run lint:eslint src/components/Hello.vue
```

Check & Automatically fix problems, for example:

```bash
yarn run lint:eslint:fix src/components/Hello.vue
```

Check all matching files

```bash
yarn run lint:eslint:all
```

Check all matching files & Automatically fix problems

```bash
yarn run lint:eslint:all:fix
```

### Type

Type check

```bash
yarn run lint:type
```

### Staged

Run configured linter tasks (or other tasks) on files that are staged in git

```bash
yarn run lint:staged
```

### Prettier

Code formatter

**Checks** that files are already formatted, rather than overwriting them, for example:

```bash
yarn run lint:prettier src/components/Hello.vue # check a certain file
```

```bash
yarn run lint:prettier src/components/ # check a certain directory
```

```bash
yarn run lint:prettier src/components/*.ts # check all matching files in a directory
```

or you can check everything (supported files)

```bash
yarn run lint:prettier:all # check everything
```

<br>

**Format** that files using the parameters mentioned above, for example

```bash
yarn run lint:prettier:fix src/components/Hello.vue # format a certain file
```

```bash
yarn run lint:prettier:all:fix # format everything
```

### Stylelint

Avoid style errors and enforce conventions

**Checks** stylesheets, for example:

```bash
yarn run lint:style src/assets/index.scss # check a certain file
```

```bash
yarn run lint:style src/assets/*.scss # check all matching files in a directory
```

or you can check everything (supported files)

```bash
yarn run lint:style:all # check everything
```

<br>

Automatically fix, where possible, problems reported by rules.

**Format** that files using the parameters mentioned above, for example

```bash
yarn run lint:style:fix src/index.scss # format a certain file
```

```bash
yarn run lint:style:all:fix # format everything
```

## Building

**Production** build: it will load the env variables from `.env.production`

```bash
yarn run build # Type checking will be performed simultaneously
```

```bash
yarn run build-only # only build
```

<br>

**Development** build: run a development build by using a different mode and `.env` file configuration:

- Current mode: load the env variables from `.env.current`

  ```bash
  yarn run build:local # Type checking will be performed simultaneously
  ```

  ```bash
  yarn run build-only:local # only build
  ```

- Test mode: load the env variables from `.env.test`

  ```bash
  yarn run build:test # Type checking will be performed simultaneously
  ```

  ```bash
  yarn run build-only:test # only build
  ```

## Preview

Locally preview the production build. Do not use this as a production server as it's not designed for it. For more information, please refer to [vite preivw](https://cn.vitejs.dev/guide/cli.html#vite-preview)

Before preview, make sure you have the build artifacts. If not, please execute the command `yarn run build`

```bash
yarn run preview
```

## Commit

You should adhere to a commit convention, such as `feat(FE-1000): description`

You have twe options:

- Recommended: Enter the interactive mode and fill in the required information following the prompts.

  ```bash
  yarn run commit
  ```

- Manual:

  ```bash
  git commit -m "feat(FE-1000): description"
  ```

If you want to bypass the prompted conventions, make sure you know what you are doing.

```bash
git commit -m "feat(FE-1000): description" --no-verify
```

## Console Hacks 🥷

Run the following command will clean the yarn cache, node_modules folder, build artifacts, as well as the cache for eslint, prettier, and stylelint.

```bash
yarn run clean
```

clean the build artifacts

```bash
yarn run clean:build
```

clean cache for eslint

```bash
yarn run clean:eslint
```

clean cache for prettier

```bash
yarn run clean:prettier
```

clean cache for stylelint

```bash
yarn run clean:stylelint
```

## Happy Code 😀

For the best development experience, please proceed with the relevant configurations.

### IDE Settings

- #### WebStorm

  - [ESLint](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_activate)
  - [Stylelint](https://www.jetbrains.com/help/webstorm/using-stylelint-code-quality-tool.html#ws_stylelint_configure)
  - [Prettier](https://www.jetbrains.com/help/webstorm/prettier.html#ws_prettier_configure)

### Editor

- #### VS Code

  - [Stylelint](https://github.com/ota-meshi/stylelint-config-standard-vue#computer-editor-integrations)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## FAQ❓

### How should I correctly write a TODO?

<details>
  <summary>Click to expand</summary>

We have defined conventions, and ESLint will assist you in standardizing the comments.

The todo comment consists of three parts. keyword + [jiraId] | (username) + summary

For example:

- TODO [FE-1000] Block by the back end.
- TODO (360-jk) Will fix this soon.

Refer to [eslint-plugin-yushu](https://npmjs.com/package/eslint-plugin-yushu) for more information.

</details>

### Stylelint: Cannot resolve custom syntax module "postcss-html". Check that module "postcss-html" is available and spelled correctly.

<details>
  <summary>Click to expand</summary>

yarn run clean & yarn

</details>

### Stylelint: TypeError: node.rangeBy is not a function

<details>
  <summary>Click to expand</summary>

It seems to occur only in WebStorm when the project root path is set to "dam".

It is recommended to open the project with "cost-h5" as the project root path.

</details>

### Why is this specific Node version?

<details>
  <summary>Click to expand</summary>

- jsdom@22.1.0: Expected version ">=16"

- execa@7.2.0: Expected version "^14.18.0 || ^16.14.0 || >=18.0.0".

</details>

### How to view the configs?

<details>
  <summary>Click to expand</summary>

- eslint config `npx eslint --print-config .eslintrc.cjs`
- stylelint config `npx stylelint --print-config .stylelintrc`

</details>

### Why is 'eslint:recommended' not recommended?

<details>
  <summary>Click to expand</summary>

Because 'eslint:recommended' includes a limited set of rules. We opted for the more comprehensive 'eslint-config-airbnb-base', which encompasses all the rules from 'eslint:recommended' and additionally provides numerous useful rules.

- [eslint-config-eslint:recommended](https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js)
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/rules)
</details>
