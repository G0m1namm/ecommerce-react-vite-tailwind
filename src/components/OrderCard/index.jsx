import { useState } from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

const OrderCard = (orderData) => {
    const { images, title, price, deleteOrder, updateOrder, quantity, index } = orderData
    const [, setQuantity] = useState(quantity)

    const decreaseQuantity = () => setQuantity(prev => {
        if (!prev) deleteOrder()
        const newQuantity = prev - 1;
        updateOrder(index, 'quantity', newQuantity);
        return newQuantity
    })

    const increaseQuantity = () => setQuantity(prev => {
        const newQuantity = prev + 1;
        updateOrder(index, 'quantity', newQuantity);
        return newQuantity
    })


    return (
        <div className="order-card-item flex items-center gap-3">
            <figure className='w-16 h-16 flex-none'>
                <img className='rounded-md w-full h-full object-cover' src={images[0]} alt={title} />
            </figure>
            <div className="flex-1 flex flex-col gap-0.5">
                <div className='flex'>
                    <span className='flex-1 max-w-[254px] whitespace-nowrap overflow-ellipsis overflow-hidden'>{title}</span>
                    <span className='flex-none text-lg font-bold'>${price}</span>
                </div>
                <div className='flex justify-between items-end'>
                    <div className='flex-none flex items-center gap-1 justify-between'>
                        <button className='flex-none p-2' onClick={decreaseQuantity}>
                            <MinusIcon className='w-6 h-6 text-black' />
                        </button>
                        <span>{quantity}</span>
                        <button className='flex-none p-2' onClick={increaseQuantity}>
                            <PlusIcon className='w-6 h-6 text-black' />
                        </button>
                    </div>
                    {deleteOrder && <button onClick={deleteOrder} className='flex-none p-2'>
                        Remove
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default OrderCard