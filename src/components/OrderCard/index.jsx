import { TrashIcon } from '@heroicons/react/24/solid'

const OrderCard = (orderData) => {
    const { images, title, price, deleteOrder } = orderData

    return (
        <div className="order-card-item flex items-center gap-3">
            <figure className='w-12 h-12 flex-none'>
                <img className='rounded-md w-full h-full object-cover' src={images[0]} alt={title} />
            </figure>
            <div className="flex-1 flex flex-col gap-0.5">
                <span className='font-bold text-xs max-w-[150px] flex-1 whitespace-nowrap overflow-ellipsis overflow-hidden'>{title}</span>
                <span className='text-base mb-1 flex-auto'>${price}</span>
            </div>
            {deleteOrder && <button onClick={deleteOrder} className='flex-none p-2 border-none'>
                <TrashIcon className='w-6 h-6 text-black' />
            </button>}
        </div>
    )
}

export default OrderCard