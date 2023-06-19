import { XMarkIcon } from '@heroicons/react/24/solid'
import clx from 'classnames'

import { useShoppingContext } from "../../providers/Shopping"
import OrderCard from '../OrderCard'
import { getTotalPrice } from '../../helpers/utils'
import { NavLink } from 'react-router-dom'

const OrdersList = () => {
    const { isOrderListOpen, orderList, closeOrderList, setOrderList, deleteOrder, setCheckoutOrders, setCounter, updateOrder } = useShoppingContext()

    const onAddCheckoutOrder = (products) => {
        const newOrder = {
            id: Date.now(),
            date: Date.now(),
            totalPrice: getTotalPrice(products),
            totalProducts: products?.length,
            products: products
        }
        setCheckoutOrders(prev => [...prev, newOrder])
        setOrderList([])
        setCounter(0)
    }

    return (
        <aside className={clx('fixed z-10 top-0 right-0 w-[400px] h-[100dvh] overflow-hidden bg-white shadow-2xl', {
            'hidden': !isOrderListOpen
        })}>
            <div className='px-4 pb-6 h-full overflow-y-auto flex flex-col'>
                <div className='flex flex-none justify-between items-center py-3'>
                    <h2 className='font-medium'>Cart</h2>
                    <button className='border-none p-2' onClick={closeOrderList}>
                        <XMarkIcon className='h-6 w-6 text-black' />
                    </button>
                </div>
                <section className='space-y-3 mt-2 flex-1'>
                    {orderList?.map((order, orderIndex) => (
                        <OrderCard
                            key={`order-item-${order.id}`}
                            index={orderIndex}
                            title={order.title}
                            price={order.price}
                            images={order.images}
                            deleteOrder={() => deleteOrder(order.id)}
                            quantity={order.quantity}
                            updateOrder={updateOrder}
                        />
                    ))}
                </section>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        <h3 className='font-bold'>Total price:</h3>
                        <span className='text-lg font-bold'>${getTotalPrice(orderList)}</span>
                    </div>
                    <NavLink to='/my-order/last'>
                        <button
                            className='flex w-full rounded-lg uppercase bg-black disabled:bg-gray-400 disabled:pointer-events-none text-white justify-center p-2 mt-4'
                            onClick={() => onAddCheckoutOrder(orderList)}
                        >
                            Checkout Order
                        </button>
                    </NavLink>
                </div>
            </div>
        </aside>
    )
}

export default OrdersList