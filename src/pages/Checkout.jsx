import { Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Brief from '../components/Brief'
import { useCart } from '../context/CartContext'

function Checkout() {
  const {
    cart,
    totalQuantity,
    totalPrice,
    clearCart,
  } = useCart()

  if (cart.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h1>Resumen de compra</h1>

        <p className="mt-4">
          Tu carrito está vacío.
        </p>

        <Button as={Link} to="/">
          Volver al catálogo
        </Button>
      </Container>
    )
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Resumen de compra</h1>

      <Brief />

      <Card className="mt-4 shadow-sm">
        <Card.Body>
          <h5>
            Productos: {totalQuantity}
          </h5>

          <h3>
            Total: ${totalPrice.toFixed(2)}
          </h3>

          <div className="d-flex gap-2 mt-3">
            <Button
              variant="success"
              onClick={() => {
                alert('Compra finalizada correctamente')
                clearCart()
              }}
            >
              Finalizar compra
            </Button>

            <Button
              variant="outline-secondary"
              onClick={clearCart}
            >
              Vaciar carrito
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Checkout