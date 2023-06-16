import { createContext, useContext, useEffect, useState } from 'react'
import { debounce } from 'lodash'
import { useLocation, createSearchParams } from 'react-router-dom';

import { API_BASE } from '../../helpers/constants'

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState(null)
    const [searchByTitle, setSearchByTitle] = useState('')
    const { search } = useLocation()

    useEffect(() => {
        let abortController = new AbortController()

        const params = new URLSearchParams(search)
        const categoryId = params.get('categoryId') ?? '';
        const title = searchByTitle || '';
        const filterQueryParams = createSearchParams({
            title,
            categoryId
        })
        const fetchProducts = debounce(async (params) => {
            const res = await fetch(`${API_BASE}/products?${params}`, {
                signal: abortController.signal,
            })
            if (!abortController.signal.aborted) {
                const productsJSON = await res.json()
                setProducts(productsJSON)
            }
        }, 500)

        fetchProducts(filterQueryParams)

        return () => {
            setSearchByTitle(null)
            abortController.abort()
        }
    }, [searchByTitle, search])

    useEffect(() => {
        let abortController = new AbortController()

        const fetchCategories = async () => {
            const res = await fetch(`${API_BASE}/categories`, {
                signal: abortController.signal,
            })
            if (!abortController.signal.aborted) {
                const categoriesJSON = await res.json()
                setCategories(categoriesJSON)
            }
        }

        fetchCategories()

        return () => {
            abortController.abort()
        }
    }, [])


    return (
        <ProductsContext.Provider value={{
            products,
            setSearchByTitle,
            searchByTitle,
            categories
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext);

export default ProductsProvider