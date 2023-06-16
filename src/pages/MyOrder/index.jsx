import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

import Layout from '../../components/Layout'
import { useShoppingContext } from "../../providers/Shopping"
import OrderCard from '../../components/OrderCard'

function MyOrder() {
  const { id } = useParams()
  const { checkoutOrders } = useShoppingContext()
  const checkoutOrder = id === 'last' ? checkoutOrders?.slice(-1)[0] : checkoutOrders?.filter(order => order.id === +id)[0]

  return (
    <Layout className="grid justify-center">
      <div className='flex items-center space-x-3'>
        <Link to='/my-orders' className='rounded-lg p-2'>
          <ChevronLeftIcon className='w-6 h-6 text-black' />
        </Link>
        <h1>Order #{checkoutOrder?.id}</h1>
      </div>
      <section className='last-order-view space-y-3 mt-2'>
        {checkoutOrder?.products?.map(order => (
          <OrderCard
            key={`last-order-${order.id}`}
            title={order.title}
            price={order.price}
            images={order.images}
          />
        ))}
      </section>
    </Layout>
  )
}

export default MyOrder