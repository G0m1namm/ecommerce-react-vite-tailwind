import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import { useShoppingContext } from '../../providers/Shopping'

function MyOrders() {
  const { checkoutOrders } = useShoppingContext()

  return (
    <Layout className="container m-auto">
      <h1>My Orders</h1>
      <section className='orders-view space-y-3 mt-2'>
        {checkoutOrders?.map(order => (
          <Link key={`checkout-order-${order.id}`} to={`/my-order/${order.id}`} className='bg-gray-300 p-2 rounded-lg inline-block w-full'>
            <h2>Order #{order.id}</h2>
          </Link>
        ))}
      </section>
    </Layout>
  )
}

export default MyOrders