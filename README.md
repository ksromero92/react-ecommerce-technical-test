# TechStore

Aplicación e-commerce desarrollada en React como parte de una prueba técnica.

TechStore permite consultar un catálogo de productos tecnológicos, visualizar el
detalle de cada producto, seleccionar cantidades, agregar productos al carrito y
consultar un resumen de compra antes de finalizarla.

## Funcionalidades

- Catálogo de productos obtenido desde una API externa.
- Vista de detalle por producto.
- Selector de cantidad.
- Carrito de compras global mediante Context API.
- Agregar productos al carrito.
- Eliminar productos del carrito.
- Vaciar carrito.
- Cálculo automático de cantidades.
- Subtotal por producto.
- Total general de la compra.
- Checkout / resumen de compra.
- Navegación mediante React Router.
- Manejo de estados de carga y error.

## Tecnologías

- React
- Vite
- React Router
- React Bootstrap
- Bootstrap
- Font Awesome
- Context API
- React Hooks
- Fetch API
- DummyJSON API

## Hooks utilizados

- `useState`
- `useEffect`
- `useContext`
- `useMemo`
- `useParams`
- `useNavigate`

## Componentes principales

- `NavBar`
- `CartWidget`
- `ItemListContainer`
- `ItemList`
- `Item`
- `ItemDetailContainer`
- `ItemDetail`
- `ItemQuantitySelector`
- `AddItemButton`
- `CartContext`
- `Checkout`
- `Brief`

## Flujo principal

1. El usuario ingresa al catálogo.
2. Selecciona un producto.
3. Consulta su detalle.
4. Selecciona la cantidad.
5. Agrega el producto al carrito.
6. Consulta el resumen de compra.
7. Puede eliminar productos o vaciar el carrito.
8. Visualiza cantidades, subtotales y total.
9. Finaliza la compra.

## API

Los productos son obtenidos desde DummyJSON mediante llamadas HTTP con `fetch`.

## Ejecutar el proyecto localmente

```bash
npm install
npm run dev
```
