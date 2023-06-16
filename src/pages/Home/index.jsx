import { NavLink, useLocation } from 'react-router-dom'
import clx from 'classnames'

import Layout from '../../components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'
import { useProducts } from '../../providers/Products'
import OrdersList from '../../components/OrdersList'
import { isNull } from 'lodash'

function Home() {
  const { products, searchByTitle, setSearchByTitle, categories } = useProducts()
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const categoryIdParam = params.get('categoryId')

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
      {categories && (
        <div className='mb-6 p-2 space-x-2'>
          <NavLink
            key={`category-all`}
            className={clx("inline-flex items-center rounded-full border border-black hover:bg-slate-200 py-1 px-2", {
              'bg-black text-white': isNull(categoryIdParam)
            })}
            to="/"
          >
            <span>All</span>
          </NavLink>
          {categories.map(category => {
            const isActive = categoryIdParam == category.id || false;

            return (
              <NavLink
                key={`category-${category.id}`}
                className={clx("inline-flex items-center rounded-full border border-black hover:bg-slate-200 py-1 px-2", {
                  'bg-black text-white': isActive
                })}
                to={{ pathname: '/', search: `?categoryId=${category.id}` }}
              >
                {category.image && <img className='w-4 h-4 rounded-full mr-2' src={category.image} alt={category.name} />}
                <span>{category.name}</span>
              </NavLink>
            )
          })}
        </div>
      )}
      <div className='grid grid-cols-4 gap-4 w-fit'>
        {products?.map(item => <Card key={`product-${item.id}`} {...item} />)}
      </div>
      <ProductDetail />
      <OrdersList />
    </Layout>
  )
}

export default Home