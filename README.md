# @dephub/eslint-js 🟨

> Opinionated modern ESLint configuration projects.

[![NPM version](https://img.shields.io/npm/v/@dephub/eslint-js.svg?style=flat)](https://npmjs.org/package/@dephub/eslint-js)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

---

## Features ✨

- ⚡ Modern ESLint flat config (ESM-first)
- 🎨 Sensible defaults for JS and TS projects
- 🔀 Import sorting and unused import handling
- 🧹 Prettier-compatible formatting rules
- 🛠 Easy to extend and customize

---

## Installation 📦

- npm: `npm install -D eslint @dephub/eslint-js`
- pnpm: `pnpm add -D eslint @dephub/eslint-js`
- yarn: `yarn add -D eslint @dephub/eslint-js`
- bun: `bun add -D eslint @dephub/eslint-js`

---

## Usage 🎯

### API 🧩

Create an `eslint.config.mjs` file in your project:

```ts
import { defineConfig } from 'eslint/config';
import jsConfig from '@dephub/eslint-js';

export default defineConfig([...jsConfig]);
```

### Extending the configuration

```ts
import { defineConfig } from 'eslint/config';
import jsConfig from '@dephub/eslint-js';

export default defineConfig([
  ...jsConfig,
  {
    rules: {
      'no-console': 'off',
    },
  },
]);
```

Then run ESLint normally:

```bash
npx eslint .
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
