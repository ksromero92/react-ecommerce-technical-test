import { Badge, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartWidget() {
  const navigate = useNavigate()
  const { totalQuantity } = useCart()

  return (
    <Button
      variant="outline-light"
      onClick={() => navigate('/checkout')}
      className="d-flex align-items-center gap-2"
    >
      <FontAwesomeIcon icon={faCartShopping} />

      <Badge bg="danger">
        {totalQuantity}
      </Badge>
    </Button>
  )
}

export default CartWidget