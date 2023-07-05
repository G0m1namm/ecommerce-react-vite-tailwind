import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link, useMatch } from '@tanstack/react-location'

import Layout from '../../components/Layout'
import { useShoppingContext } from "../../providers/Shopping"
import OrderCard from '../../components/OrderCard'

function MyOrder() {
  const { params: { id } } = useMatch()
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
          <li
            key={`last-order-${order.id}`}
            className='flex border border-black rounded-md'
          >
            <figure className='flex-none max-w-[100px] aspect-square'>
              <img className='w-full rounded-md' src={order.images[0]} alt={order.title} />
            </figure>
            <div className='p-2'>
              <h2 className='mb-2'>{order.title}</h2>
              <span className='font-bold text-lg'>${order.price}</span>
            </div>
          </li>
        ))}
      </section>
    </Layout>
  )
}

export default MyOrder