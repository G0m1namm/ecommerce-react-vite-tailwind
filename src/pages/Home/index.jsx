import { isEmpty } from 'lodash';
import { useSearch } from '@tanstack/react-location';

import Layout from '../../components/Layout'
import Card from '../../components/Card'
import FilterTags from '../../components/FilterTags'
import ProductDetail from '../../components/ProductDetail'
import OrdersList from '../../components/OrdersList'
import { useProducts } from '../../hooks/useProducts'
import { useCategories } from '../../hooks/useCategories';
import { useProductsContext } from '../../providers/Products';

function Home() {
  const { searchByTitle, setSearchByTitle, debouncedSearchByTitle } = useProductsContext()
  const searchParams = useSearch()
  const { isLoading, isFetching, data: products } = useProducts(debouncedSearchByTitle, searchParams)
  const { data: categories } = useCategories()

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
      {(isLoading || isFetching) && <h2 className='text-2xl font-bold'>Is Loading...</h2>}
      <div className='grid grid-cols-4 gap-4 w-fit'>
        {!isEmpty(products) && products?.map(item => <Card key={`product-${item.id}`} {...item} />)}
      </div>
      <ProductDetail />
      <OrdersList />
    </Layout>
  )
}

export default Home