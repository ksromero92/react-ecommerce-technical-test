import { useEffect, useState } from 'react'
import { Alert, Container, Spinner } from 'react-bootstrap'
import ItemList from './ItemList'
import { getProducts } from '../services/productsApi'

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <Container className="py-5">
      <div className="mb-4">
        <h1>TechStore</h1>
        <p className="text-muted">{greeting}</p>
      </div>

      {loading && (
        <div className="text-center py-5">
          <Spinner animation="border" />
          <p className="mt-2">Cargando productos...</p>
        </div>
      )}

      {error && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}

      {!loading && !error && (
        <ItemList products={products} />
      )}
    </Container>
  )
}

export default ItemListContainer