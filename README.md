# FRONT-END: React + TypeScript + Vite

* To create a new project we are using Vite. From the terminal run the following command:

    > npm create vite@latest "projectName"

## Dependencies

### SASS

* Install the following packages

    > npm install sass --save

### Redux Toolkit + React-Redux

* Install the following packages

    > npm install @reduxjs/toolkit react-redux @types/react-redux --save

### React Router

* Install the following packages

    > npm install react-router-dom @types/react-router-dom --save

### React Toastify

* Install the following packages

    > npm install react-toastify --save

### React Paginate

* Install the following packages

    > npm install react-paginate --save

### Moment-Timezone

* Library to handle time zone conversions
* Install the following packages

    > npm install moment-timezone --save

### Typescript Linter Plugin

* Install from the terminal

    > npm install --save-dev @typescript-eslint/eslint-plugin

---

# DEPLOYMENT

1. From the /frontend folder, build static assets. If using Vite: /dist folder. If using create-react-app /build folder.

    > npm run build

2. Make sure that inside .gitignore (root & /frontend) are removed/commented out so that the folder will be included in the commit  

---

## Free Icons (svg, png, jpg)

<https://icons8.com/icons/set/html5>
<https://www.svgrepo.com/svg/473559/bitbucket?edit=true>

---

## Original README

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
