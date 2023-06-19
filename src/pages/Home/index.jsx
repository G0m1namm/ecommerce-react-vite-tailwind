import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { useProducts } from '../../providers/Products'
import OrdersList from '../../components/OrdersList'
import FilterTags from '../../components/FilterTags'

function Home() {
  const { products, searchByTitle, setSearchByTitle, categories } = useProducts()

  const onSearch = (e) => {
    setSearchByTitle(e.target.value)
  }

  return (
    <Layout className="items-center">
      <div className='mb-4'>
        <h1 className='font-bold text-xl uppercase'>Home</h1>
      </div>
      <div className='mb-4'>
        <input
          className='border border-black rounded-md p-4'
          value={searchByTitle}
          onChange={onSearch}
        />
      </div>
      <FilterTags tags={categories} />
      <div className='grid grid-cols-4 gap-4 w-fit'>
        {products?.map(item => <Card key={`product-${item.id}`} {...item} />)}
      </div>
      <ProductDetail />
      <OrdersList />
    </Layout>
  )
}

export default Home