import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../context/CartContext'

function AddItemButton({ product, quantity, onAdded }) {
  const { addItem } = useCart()

  const handleAdd = () => {
    addItem(product, quantity)

    if (onAdded) {
      onAdded()
    }
  }

  return (
    <Button variant="primary" onClick={handleAdd}>
      <FontAwesomeIcon icon={faCartPlus} className="me-2" />
      Agregar al carrito
    </Button>
  )
}

export default AddItemButton