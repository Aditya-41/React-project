# Lms Frontend


### Setup instruction 
1. Clone the Project 
```
    git clone https://github.com/Aditya-41/React-project.git
```
2. Move into the directory
```
    cd frontend
```
3. install dependencies
```
    npm i
```

4. run the server
```
    npm run dev
```

### Setup Instruction for Tailwind 
[TailWind Official Instruction Doc]
(https://tailwindcss.com/docs/installation)

1. Instal TailWind CSS
```
    npm install -D tailwindcss
```
2. Create Tail-Wind Config File
```
    npx tailwindcss init
```
3. Add File Extention to Tail-Wind Config Files
```
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

```
4. Add the Tail-Wind directives at the top of the `Index.css` File
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
