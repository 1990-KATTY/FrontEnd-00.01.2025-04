# 🖼️ XPokémon API - Hackathon Semana 17

📖 Instrucciones de Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona el repositorio:

2. Instala las dependencias:

 cd Hackaton17
 cd sv1106040
 npm create vite@latest hackatonPokemon -- --template react
  cd hackatonPokemon/
  instalar
    npm install
    npm install react-router-dom bootstrap
     npm run dev

3. Inicia el servidor de desarrollo:

Si usas Vite:

npm run dev

Si usas Create React App:

npm start

4. Abre tu navegador:

Ve a:

http://localhost:5173/    # Vite
http://localhost:3000/    # CRA

🤖 Tecnologías Utilizadas

Lenguaje: JavaScript (ES6+)

Framework: React

Estilos: CSS, Bootstrap (opcional)

Herramientas:

Vite / Create React App (según configuración del entorno)

Axios (para peticiones HTTP)

PokeAPI (https://pokeapi.co/)

📁 Estructura de Carpetas y Archivos
src/
├── assets/                # Imágenes y recursos estáticos
│   ├── logo.jpeg
│   └── react.svg
├── components/           # Componentes reutilizables de UI
│   ├── Header.jsx
│   ├── Header.css
│   ├── PokemonCard.jsx
│   ├── Card.css
│   └── SearchBar.jsx
├── pages/                # Páginas principales de la aplicación
│   ├── Home.jsx
│   ├── Home.css
│   ├── PokemonDetail.jsx
│   └── PokemonDetail.css
├── utils/                # Funciones auxiliares
│   └── pokemonTypes.jsx
├── App.jsx               # Componente principal de la app
├── App.css
├── index.js              # Punto de entrada principal
├── index.css
├── main.js               # Si se usa Vite
└── styles.css          # Estilos generales

logearse: http://localhost:5173/ 