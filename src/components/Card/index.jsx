import { PlusIcon } from '@heroicons/react/24/solid'

import { useShoppingContext } from '../../providers/Shopping'

const Card = (productData) => {
    const { setCounter, setSelectedProduct } = useShoppingContext()
    const { title, price, category, images } = productData

    return (
        <div
            className="cursor-pointer w-56 h-fit rounded-md"
            onClick={() => setSelectedProduct(productData)}
        >
            <figure className="relative w-full aspect-square rounded-lg overflow-hidden">
                <span onClick={() => setCounter(prev => prev + 1)} className="absolute top-0 right-0 flex justify-center items-center m-2 p-1 rounded-full w-6 h-6 bg-white/60 hover:bg-white">
                    <PlusIcon className='h-6 w-6 text-black' />
                </span>
                <img className=" w-full h-full object-cover" src={images[0]} alt="cat" />
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