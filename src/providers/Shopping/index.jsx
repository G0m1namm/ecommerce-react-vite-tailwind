import { useContext, createContext, useState } from 'react'

export const ShoppingContext = createContext()

const ShoppingProvider = ({ children }) => {
    // Cart Counter · Increment cart number
    const [counter, setCounter] = useState(0)

    // Product Detai · Control selected product
    const [selectedProduct, setSelectedProduct] = useState(null)
    const closeProductDetail = () => setSelectedProduct(null)
    const isProductDetailSelected = !!selectedProduct;

    // Order list · control selected orders
    const [orderList, setOrderList] = useState([])
    const [isOrderListOpen, setIsOrderListOpen] = useState(false)
    const closeOrderList = () => setIsOrderListOpen(false)
    const openOrderList = () => setIsOrderListOpen(true)

    const deleteOrder = (orderId) => {
        if (!orderList.length) return
        const filteredOrder = orderList.filter(order => order.id !== orderId)
        setOrderList(filteredOrder)
        setCounter(filteredOrder.length)
    }

    return (
        <ShoppingContext.Provider
            value={{
                counter,
                setCounter,
                selectedProduct,
                setSelectedProduct,
                isProductDetailSelected,
                closeProductDetail,
                orderList,
                setOrderList,
                isOrderListOpen,
                closeOrderList,
                openOrderList,
                deleteOrder
            }}
        >
            {children}
        </ShoppingContext.Provider>
    )
}

export const useShoppingContext = () => useContext(ShoppingContext)

export default ShoppingProvider