import { Container } from 'react-bootstrap'
import { useCart } from '../context/CartContext'

function Checkout() {
  const { cart, totalQuantity, totalPrice } = useCart()

  return (
    <Container className="py-5">
      <h1>Resumen de compra</h1>

      <p>Productos: {totalQuantity}</p>
      <p>Total: ${totalPrice.toFixed(2)}</p>

      {cart.length === 0 && (
        <p>Tu carrito está vacío.</p>
      )}
    </Container>
  )
}

export default Checkout