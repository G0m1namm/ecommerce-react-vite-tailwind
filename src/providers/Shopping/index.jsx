import { useContext, createContext, useState } from 'react'
import { cloneDeep } from 'lodash'

export const ShoppingContext = createContext()

const ShoppingProvider = ({ children }) => {
    // Cart Counter · Increment cart number
    const [counter, setCounter] = useState(0)

    // Product Detai · Control selected product
    const [selectedProduct, setSelectedProduct] = useState(null)
    const isProductDetailSelected = !!selectedProduct;

    const closeProductDetail = () => setSelectedProduct(null)

    // Order list · control selected orders
    const [orderList, setOrderList] = useState([])
    const [isOrderListOpen, setIsOrderListOpen] = useState(false)

    const closeOrderList = () => setIsOrderListOpen(false)
    const openOrderList = () => setIsOrderListOpen(true)
    const toggleOrderList = () => setIsOrderListOpen(prev => !prev)
    const deleteOrder = (orderId) => {
        if (!orderList.length) return
        const filteredOrder = orderList.filter(order => order.id !== orderId)
        setOrderList(filteredOrder)
        setCounter(filteredOrder.length)
    }

    const updateOrder = (index, key, value) => {
        let updatedArray = cloneDeep(orderList)
        updatedArray[index][key] = value
        setOrderList(updatedArray)
    }

    // Checkout List · Control orders after checkout
    const [checkoutOrders, setCheckoutOrders] = useState([])

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
                toggleOrderList,
                deleteOrder,
                setCheckoutOrders,
                checkoutOrders,
                updateOrder
            }}
        >
            {children}
        </ShoppingContext.Provider>
    )
}

export const useShoppingContext = () => useContext(ShoppingContext)

export default ShoppingProvider