import { createContext, useContext, useEffect, useState } from 'react'
import { API_BASE } from '../../helpers/constants';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${API_BASE}/products`)
                const productsResponse = await res.json();
                setProducts(productsResponse);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [])

    return (
        <ProductsContext.Provider value={{
            products
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext);

export default ProductsProvider