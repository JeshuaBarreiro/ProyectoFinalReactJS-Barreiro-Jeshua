# PC Hardware Store

Proyecto final del curso **React JS - Coderhouse**.

Se trata de una Single Page Application (SPA) de e-commerce desarrollada con **React** que permite visualizar productos de hardware, filtrarlos por categorías, agregarlos al carrito y generar una orden de compra almacenada en **Firebase Firestore**.

---

## Tecnologías utilizadas

- React
- React Router DOM
- Context API
- Firebase / Firestore
- Bootstrap
- Vite

---

## Funcionalidades

- Visualización de catálogo de productos
- Filtrado por categorías
- Vista en detalle de cada producto
- Selección de cantidad mediante ItemCount
- Agregar productos al carrito
- Carrito con cálculo de subtotal y total
- Sistema de ofertas con precio original y precio con descuento
- Generación de orden de compra en Firebase
- Visualización del ID de orden al finalizar la compra

---

## Estructura del proyecto
# PC Hardware Store

Proyecto final del curso **React JS - Coderhouse**.

Se trata de una Single Page Application (SPA) de e-commerce desarrollada con **React** que permite visualizar productos de hardware, filtrarlos por categorías, agregarlos al carrito y generar una orden de compra almacenada en **Firebase Firestore**.

---

## Tecnologías utilizadas

- React
- React Router DOM
- Context API
- Firebase / Firestore
- Bootstrap
- Vite

---

## Funcionalidades

- Visualización de catálogo de productos
- Filtrado por categorías
- Vista en detalle de cada producto
- Selección de cantidad mediante ItemCount
- Agregar productos al carrito
- Carrito con cálculo de subtotal y total
- Sistema de ofertas con precio original y precio con descuento
- Generación de orden de compra en Firebase
- Visualización del ID de orden al finalizar la compra

---

## Estructura del proyecto
src
│
├── components
│ ├── Cart
│ │ └── Cart.jsx
│ ├── Checkout
│ │ └── Checkout.jsx
│ ├── Hero
│ │ └── Hero.jsx
│ ├── Item
│ │ ├── Item.jsx
│ │ ├── ItemList.jsx
│ │ └── ItemListContainer.jsx
│ ├── ItemCount
│ │ └── ItemCount.jsx
│ ├── ItemDetail
│ │ ├── ItemDetail.jsx
│ │ └── ItemDetailContainer.jsx
│ ├── NavBar
│ │ ├── NavBar.jsx
│ │ └── CartWidget.jsx
│ └── ProductCarousel
│ └── ProductCarousel.jsx
│
├── context
│ └── CartContext.jsx
│
├── firebase
│ └── firebaseConfig.js
│
├── services
│ └── firebase.js
│
├── App.jsx
├── main.jsx
└── index.css

---

## Instalación y ejecución

1. Clonar el repositorio



2. Instalar dependencias

npm install


3. Ejecutar el proyecto

npm run dev

---

## Base de datos

Se utiliza **Firebase Firestore** para:

- almacenar el catálogo de productos
- registrar las órdenes de compra generadas en el checkout

---

## Autor

Proyecto desarrollado por **Jeshu** para el curso **React JS - Coderhouse**.
