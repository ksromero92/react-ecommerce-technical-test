import { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import AddItemButton from './AddItemButton'

function ItemQuantitySelector({ product }) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const decrease = () => {
    setQuantity((current) => Math.max(1, current - 1))
    setAdded(false)
  }

  const increase = () => {
    setQuantity((current) => current + 1)
    setAdded(false)
  }

  return (
    <div>
      <div className="d-flex align-items-center gap-3 mb-3">
        <span>Cantidad:</span>

        <ButtonGroup>
          <Button
            variant="outline-secondary"
            onClick={decrease}
          >
            -
          </Button>

          <Button variant="light" disabled>
            {quantity}
          </Button>

          <Button
            variant="outline-secondary"
            onClick={increase}
          >
            +
          </Button>
        </ButtonGroup>
      </div>

      <AddItemButton
        product={product}
        quantity={quantity}
        onAdded={() => setAdded(true)}
      />

      {added && (
        <p className="text-success mt-3 mb-0">
          Producto agregado al carrito.
        </p>
      )}
    </div>
  )
}

export default ItemQuantitySelector