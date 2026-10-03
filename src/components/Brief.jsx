import { Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../context/CartContext'

function Brief() {
  const { cart, removeItem } = useCart()

  return (
    <div className="d-flex flex-column gap-3">
      {cart.map((item) => (
        <Card key={item.id} className="shadow-sm">
          <Card.Body className="d-flex align-items-center gap-3">
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{
                width: '90px',
                height: '90px',
                objectFit: 'contain',
              }}
            />

            <div className="flex-grow-1">
              <h5 className="mb-1">{item.title}</h5>

              <p className="mb-1">
                Cantidad: {item.quantity}
              </p>

              <p className="mb-0 fw-bold">
                Subtotal: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            <Button
              variant="outline-danger"
              onClick={() => removeItem(item.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Brief