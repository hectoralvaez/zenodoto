# Arrancar proyecto
```
npm create vite@latest
```

# Arrancar GIT:
```
git init
git branch -M main
git remote add origin https://github.com/hectoralvaez/zenodoto.git
```

# Instalar plugin vite react
```
npm install @vitejs/plugin-react -E
```

# Instalar react react-dom
```
npm install react react-dom -E
```

# Configuración de VITE
## vite.config.js
```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()]
})
```
