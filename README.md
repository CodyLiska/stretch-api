# Stretch API

## Project Structure

```
Stretch-App/
├── backend/ # Node.js + Express API server
├── frontend/ # Vite + Vue 3 frontend
└──
```

---

## Backend Setup

### 1. Create the backend folder and initialize

```bash
mkdir backend
cd backend
npm init -y

npm install express mongoose dotenv cors
npm install --save-dev nodemon
```

### 2. Create the server.js file

```js
// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 3. Create the .env file

```json
MONGO_URI=<your-mongo-uri>
PORT=<your-port>
```

### 4. Add backend scripts to backend/package.json

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## Frontend Setup (Vue 3 + Vite)

#### 1. Scaffold frontend using Vite

```bash
npm create vite@latest frontend

cd frontend
npm install
npm install vue-router@4
```

#### 2. Add Vite config at the root of the frontend/ folder

```js
// frontend/vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
  },
});
```

#### 3. Add API URL to environment variables

```bash
VITE_API_URL=http://localhost:3000/api
```

#### 4. Example usage in a Vue component

```js
// frontend/src/components/ExampleList.vue
<script>
import axios from 'axios';

export default {
  name: 'ExampleList',
  data() {
    return { items: [] }
  },
  async mounted() {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/example`);
      this.items = res.data;
    } catch (err) {
      console.error(err);
    }
  }
}
</script>
```

#### 5. index.html (root of frontend/)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Stretch App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

#### 6. Scripts in frontend/package.json

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## Run Frontend & Backend Together

- Manually (in separate terminals)

```bash
cd backend && npm run dev
# In another terminal:
cd frontend && npm run dev
```

- Automatically (in one terminal, requires concurrently)

```bash
npm run dev
```

---

## Final Notes

Frontend URL: http://localhost:5173

Backend URL: http://localhost:3000/api

Env Vars: Use VITE\_ prefix in frontend .env

---

## Optional: ESLint Without Babel

If you want ESLint with Vue and no Babel config:

#### 1. Install ESLint tools

```bash
npm install --save-dev eslint vue-eslint-parser eslint-plugin-vue
```

#### 2. Add eslint.config.mjs:

```js
// frontend/eslint.config.mjs
export default [
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: require.resolve("vue-eslint-parser"),
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      vue: require("eslint-plugin-vue"),
    },
    rules: {
      "vue/no-unused-vars": "warn",
    },
  },
];
```

## TODO:

- [ ] add images and videos to stretches
- [ ] add a search bar w. filters for Difficulty, Muscle Groups, Tags
- [ ] on the StretchList page, add padding to the tags:, they are smushed next to the label
