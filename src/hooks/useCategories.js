import { useQuery } from '@tanstack/react-query'

import api from '../helpers/apiService'

export const categoryKeys = {
    allCategories: () => ['categories'],
    category: (id) => [...categoryKeys.allCategories(), id],
    productsByCategory: (id) => [...categoryKeys.allCategories(), 'category', id]
}

export const useCategories = () => {
    const categoriesQuery = useQuery({
        queryKey: categoryKeys.allCategories(),
        queryFn: ({ signal }) => api.fetchCategories(signal),
    })

    return categoriesQuery
}

export const useCategoryById = (categoryId) => {

    const categoryQuery = useQuery({
        queryKey: categoryKeys.product(categoryId),
        queryFn: ({ signal }) => api.fetchCategoryById(categoryId, signal),
    })

    return categoryQuery
}

export const useProductsByCategory = (categoryId) => {

    const productsByCategoryQuery = useQuery({
        queryKey: categoryKeys.productsByCategory(categoryId),
        queryFn: ({ signal }) => api.fetchProductsByCategory(categoryId, signal),
    })

    return productsByCategoryQuery
}
