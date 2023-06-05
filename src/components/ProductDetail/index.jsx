import clx from 'classnames'

import { XMarkIcon } from '@heroicons/react/24/solid'
import { useShoppingContext } from '../../providers/Shopping'

const ProductDetail = () => {
    const { closeProductDetail, isProductDetailSelected, selectedProduct } = useShoppingContext()
    return (
        <aside className={clx('fixed z-10 top-[64px] right-0 w-[300px] h-[calc(100dvh-64px)] overflow-x-hidden bg-white', {
            'hidden': !isProductDetailSelected
        })}>
            <div className='px-4 pb-6 h-full'>
                <div className='flex justify-between items-center py-3'>
                    <h2 className='font-medium'>Details</h2>
                    <button className='border-none p-2' onClick={closeProductDetail}>
                        <XMarkIcon className='h-6 w-6 text-black' />
                    </button>
                </div>
                <figure className='flex flex-col'>
                    <img className='rounded-lg mb-3' src={selectedProduct?.images[0]} alt={selectedProduct?.title} />
                    <span className='mb-1'>${selectedProduct?.price}</span>
                    <span className='font-bold'>{selectedProduct?.title}</span>
                    <span className='text-sm'>{selectedProduct?.description}</span>
                </figure>
            </div>
        </aside>
    )
}

export default ProductDetail