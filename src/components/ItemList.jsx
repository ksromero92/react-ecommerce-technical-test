import { Col, Row } from 'react-bootstrap'
import Item from './Item'

function ItemList({ products }) {
  return (
    <Row className="g-4">
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} lg={4} xl={3}>
          <Item product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default ItemList