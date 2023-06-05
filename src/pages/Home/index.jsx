import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { useProducts } from '../../providers/Products'
import { useShoppingContext } from '../../providers/Shopping'

function Home() {
  const { products } = useProducts()
  return (
    <Layout className="items-center">
      <div className='grid grid-cols-4 gap-4 w-fit'>
        {products?.map(item => <Card key={`product-${item.id}`} {...item} />)}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home