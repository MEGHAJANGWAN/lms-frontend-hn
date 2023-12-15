# LMS Frontend

### Setup instruction

1. Clone the project
```
git clone https://github.com/MEGHAJANGWAN/lms-frontend-hn.git
```
2. Move into the directory
```
cd lms-frontend-hn
```
3. install dependencies
```
npm i
```
4. run the server
```
npm run dev
```


### Setup instructions for tailwind in vite

[Tailwind official instruction doc] https://tailwindcss.com/docs/installation

1. Install tailwind css
```
npm install -D tailwindcss postcss autoprefixer
```
2. Create tailwind config file
```
npx tailwindcss init -p
```
3. Add file extensions to tailwind config file in the contents property
```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```
4. Add the tailwind directives at the top of the 'index.css' file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Add the following details in the plugin property of tailwind config
```
  [require("daisyui"), require("@tailwindcss/line-clamp")],

```

### Adding pluggins and dependencies
```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp 
```


### Configure auto import sort eslint
1. install simple import sort
```
npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `eslint.cjs`
```
'simple-import-sort/imports': 'error'
```

3. Add simple-import sort plugin in `eslint.cjs`
```
plugins: ['react-refresh', 'simple-import-sort'],
```

4. To enable auto import sort on file save in vscode
-Open 'setting.json'
-add the following config
```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```