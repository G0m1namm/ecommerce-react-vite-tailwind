import { createContext, useContext, useEffect, useState } from 'react'
import { debounce } from 'lodash'

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [searchByTitle, setSearchByTitle] = useState('')
    const [debouncedSearchByTitle, setDebouncedSearchByTitle] = useState('')


    useEffect(() => {
        const debouncedSearchByTitle = debounce((text) => setDebouncedSearchByTitle(text), 700)
        debouncedSearchByTitle(searchByTitle)
    }, [searchByTitle])

    return (
        <ProductsContext.Provider value={{
            setSearchByTitle,
            searchByTitle,
            debouncedSearchByTitle
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext);

export default ProductsProvider