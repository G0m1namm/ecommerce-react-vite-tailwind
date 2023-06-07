import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

import { useShoppingContext } from '../../providers/Shopping'

const Card = (productData) => {
    const { setCounter, setSelectedProduct, setOrderList, openOrderList, orderList } = useShoppingContext()
    const { title, price, category, images } = productData

    const onAddProductOrder = (event, product) => {
        setCounter(prev => prev + 1)
        setOrderList(prev => [...prev, product])
        openOrderList()
        event.stopPropagation()
    }

    const renderAddOrderButton = (item, orders) => {
        const id = item.id
        if (!orders.some(product => product.id === id)) {
            return (
                <span onClick={(event) => onAddProductOrder(event, item)} className="absolute top-0 right-0 flex justify-center items-center m-2 p-1 rounded-full w-6 h-6 bg-white/60 hover:bg-white">
                    <PlusIcon className='h-6 w-6 text-black' />
                </span>
            )
        }

        return (
            <span className="absolute top-0 right-0 flex justify-center items-center m-2 p-1 rounded-full w-6 h-6 bg-black/60 hover:bg-black">
                <CheckIcon className='h-6 w-6 text-white' />
            </span>
        )
    }

    return (
        <div
            className="cursor-pointer w-56 h-fit rounded-md"
            onClick={() => setSelectedProduct(productData)}
        >
            <figure className="relative w-full aspect-square rounded-lg overflow-hidden">
                {renderAddOrderButton(productData, orderList)}
                <img className=" w-full h-full object-cover" src={images[0]} alt="cat" loading='lazy' />
                <span className="absolute bottom-0 left-0 m-2 rounded-full px-4 py-1 bg-white/60 text-sm">{category?.name}</span>
            </figure>
            <p className="flex justify-between items-start px-2 py-4">
                <span>{title}</span>
                <strong className="font-medium">${price}</strong>
            </p>
        </div>
    )
}

export default Card