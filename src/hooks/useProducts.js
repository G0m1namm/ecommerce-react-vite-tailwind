import { useQuery } from '@tanstack/react-query'

import api from '../helpers/apiService'

export const productKeys = {
    allProducts: (title, categoryId) => ['products', title, categoryId ?? ''],
    product: (id) => ['products', id],
}

export const useProducts = (title = '', searchParam) => {
    const productsQuery = useQuery({
        queryKey: productKeys.allProducts(title, searchParam?.categoryId),
        queryFn: ({ signal, queryKey }) => api.fetchProducts(signal, { title: queryKey[1], ...searchParam }),
    })

    return productsQuery
}

export const useProductById = (productId) => {

    const productQuery = useQuery({
        queryKey: productKeys.product(productId),
        queryFn: ({ signal, queryKey }) => api.fetchProductById(queryKey[1], signal),
    })

    return productQuery
}
