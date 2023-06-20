import { apiRequestFormat } from "./apiRequestFormat"

const req = apiRequestFormat()

const fetchProducts = async (signal, params) => {
    try {
        const data = await req.apiGet('/products', signal, { params })
        return data
    } catch (error) {
        return error
    }
}

const fetchProductById = async (id, signal) => {
    try {
        const data = await req.apiGet(`/products/${id}`, signal)
        return data
    } catch (error) {
        return error
    }
}

const fetchCategories = async (signal) => {
    try {
        const data = await req.apiGet('/categories', signal)
        return data
    } catch (error) {
        return error
    }
}

const fetchCategoryById = async (categoryId, signal) => {
    try {
        const data = await req.apiGet(`/categories/${categoryId}`, signal)
        return data
    } catch (error) {
        return error
    }
}

const fetchProductsByCategory = async (categoryId, signal) => {
    try {
        const data = await req.apiGet(`/categories/${categoryId}/products`, signal)
        return data
    } catch (error) {
        return error
    }
}

export default {
    fetchProducts,
    fetchProductById,
    fetchCategories,
    fetchCategoryById,
    fetchProductsByCategory
}