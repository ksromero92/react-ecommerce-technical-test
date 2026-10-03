import { useEffect, useState } from 'react'
import { Alert, Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/productsApi'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(id)
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [id])

  return (
    <Container className="py-5">
      {loading && (
        <div className="text-center py-5">
          <Spinner animation="border" />
          <p className="mt-2">Cargando producto...</p>
        </div>
      )}

      {error && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}

      {!loading && !error && product && (
        <ItemDetail product={product} />
      )}
    </Container>
  )
}

export default ItemDetailContainer