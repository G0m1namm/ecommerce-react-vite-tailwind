import { XMarkIcon } from '@heroicons/react/24/solid'
import clx from 'classnames'

import { useShoppingContext } from "../../providers/Shopping"
import OrderCard from '../OrderCard'

const OrdersList = () => {
    const { isOrderListOpen, orderList, closeOrderList, deleteOrder } = useShoppingContext()

    return (
        <aside className={clx('fixed z-10 top-[64px] right-0 w-[300px] h-[calc(100dvh-64px)] overflow-hidden bg-white', {
            'hidden': !isOrderListOpen
        })}>
            <div className='px-4 pb-6 h-full overflow-y-auto'>
                <div className='flex justify-between items-center py-3'>
                    <h2 className='font-medium'>Cart</h2>
                    <button className='border-none p-2' onClick={closeOrderList}>
                        <XMarkIcon className='h-6 w-6 text-black' />
                    </button>
                </div>
                <section className='space-y-3 mt-2'>
                    {orderList?.map(order => (
                        <OrderCard
                            key={`order-item-${order.id}`}
                            title={order.title}
                            price={order.price}
                            images={order.images}
                            deleteOrder={() => deleteOrder(order.id)}
                        />
                    ))}
                </section>
            </div>
        </aside>
    )
}

export default OrdersList