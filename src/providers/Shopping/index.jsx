import { useContext, createContext, useState } from 'react'

export const ShoppingContext = createContext()

const ShoppingProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)

    return (
        <ShoppingContext.Provider value={{ counter, setCounter }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export const useShoppingContext = () => useContext(ShoppingContext)

export default ShoppingProvider