import Layout from '../../components/Layout'
import Card from '../../components/Card'
import { useProducts } from '../../providers/Products'

function Home() {
  const { products } = useProducts()
  return (
    <Layout className="items-center">
      <div className='grid grid-cols-4 gap-4 w-fit'>
        {products?.map(item => <Card key={`product-${item.id}`} {...item} />)}
      </div>
    </Layout>
  )
}

export default Home