import { Card, Col, Row } from 'react-bootstrap'
import ItemQuantitySelector from './ItemQuantitySelector'

function ItemDetail({ product }) {
  return (
    <Card className="shadow-sm">
      <Card.Body className="p-4">
        <Row className="align-items-center g-4">
          <Col md={5}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid"
              style={{
                width: '100%',
                maxHeight: '420px',
                objectFit: 'contain',
              }}
            />
          </Col>

          <Col md={7}>
            <h1>{product.title}</h1>

            <p className="text-muted">
              {product.description}
            </p>

            <h2 className="mb-4">
              ${product.price.toFixed(2)}
            </h2>

            <ItemQuantitySelector product={product} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default ItemDetail