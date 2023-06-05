import { useContext, createContext, useState } from 'react'

export const ShoppingContext = createContext()

const ShoppingProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const closeProductDetail = () => setSelectedProduct(null);
    const isProductDetailSelected = !!selectedProduct;

    return (
        <ShoppingContext.Provider
            value={{
                counter,
                setCounter,
                selectedProduct,
                setSelectedProduct,
                isProductDetailSelected,
                closeProductDetail
            }}
        >
            {children}
        </ShoppingContext.Provider>
    )
}

export const useShoppingContext = () => useContext(ShoppingContext)

export default ShoppingProvider