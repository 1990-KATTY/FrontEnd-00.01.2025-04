# 🛒 Tienda Online - Proyecto Vite + React

Este es un proyecto de **tienda online** desarrollado en **Vite + React**, con funcionalidades completas de carrito, favoritos y filtrado de productos por categoría.  
Incluye almacenamiento en `localStorage` para persistir datos de usuario y un formulario de contacto.

---

## 📂 Estructura del Proyecto

📦 proyecto-tienda
┣ 📂 public
┃ ┣ 📂 images
┃ ┃ ┣ categoria1.jpg
┃ ┃ ┣ categoria2.jpg
┃ ┃ ┣ categoria3.jpg
┃ ┃ ┗ categoria4.jpg
┃ ┗ favicon.ico
┣ 📂 src
┃ ┣ 📂 components
┃ ┃ ┣ Footer.jsx # Pie de página con redes sociales y enlaces
┃ ┃ ┣ Navbar.jsx # Barra de navegación con carrito y favoritos
┃ ┃ ┗ ProductCard.jsx # Tarjeta individual de producto
┃ ┣ 📂 context
┃ ┃ ┗ StoreContext.jsx # Context API para carrito y favoritos
┃ ┣ 📂 hooks
┃ ┃ ┗ useProductos.js # Hook personalizado para obtener y filtrar productos
┃ ┣ 📂 pages
┃ ┃ ┣ Home.jsx # Página de inicio con categorías
┃ ┃ ┣ Productos.jsx # Listado filtrable de productos
┃ ┃ ┣ ProductoDetalle.jsx # Vista individual del producto
┃ ┃ ┣ Contactos.jsx # Formulario con almacenamiento en localStorage
┃ ┃ ┗ Favoritos.jsx # Página de productos favoritos
┃ ┣ App.jsx # Rutas principales y layout general
┃ ┣ main.jsx # Punto de entrada
┃ ┗ index.css # Estilos globales
┣ .gitignore
┣ package.json
┗ READMEkatty.md
🖼 Funcionalidades principales
# 🏠 Home
Banner central con mensaje de bienvenida.

Categorías con imágenes (categoria1.jpg, categoria2.jpg, etc.).

Botones para filtrar productos por categoría.

# 🛍 Productos
Listado completo de productos.

Filtro por categoría.

Vista de detalle de producto.

Botón para agregar al carrito.

Botón ❤️ para agregar a favoritos.

# 🛒 Carrito
Contador de productos en el icono del carrito.

Lista de productos añadidos con subtotal.

Persistencia de datos en localStorage.

# ❤️ Favoritos
Contador de favoritos en el icono de corazón.

Lista de productos guardados como favoritos.

Persistencia en localStorage.
# 📜 Historial de Compras
Lista de compras realizadas por el usuario.

Fecha, productos y total pagado.

# 🏆 Leaderboard de Compras
Ranking de los usuarios con más compras.

Muestra nombre y cantidad de compras.

# 📞 Contactos
Formulario centrado y en tarjeta.

Campos: Nombre, Correo electrónico, Teléfono y Mensaje.

Guarda correo y teléfono en localStorage para autocompletado.

Muestra alerta de confirmación al enviar.

# 📌 Footer
Aparece en todas las páginas.

Redes sociales (Facebook, Instagram, Twitter).

Enlaces rápidos a Inicio, Productos y Contacto.

# 🛠 Tecnologías usadas
React (Vite como bundler)

React Router DOM

Bootstrap 5

Context API

localStorage

Eventos personalizados