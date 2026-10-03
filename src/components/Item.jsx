import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Item({ product }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.thumbnail}
        alt={product.title}
        style={{
          height: '220px',
          objectFit: 'contain',
          padding: '1rem',
        }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>

        <Card.Text className="fs-5 fw-bold">
          ${product.price.toFixed(2)}
        </Card.Text>

        <Button
          as={Link}
          to={`/product/${product.id}`}
          variant="primary"
          className="mt-auto"
        >
          Ver detalle
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Item