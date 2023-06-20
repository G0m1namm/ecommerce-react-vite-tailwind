import axios from 'axios'

export const privateAxios = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: { 'X-Custom-Header': 'Private' } // For further authentication
});

export const handleErrors = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request.response);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }

    throw Error(error?.message)
}

export const apiRequestFormat = () => {
    const apiGet = async (url, signal, restConfig) => {
        const config = { signal, ...restConfig }
        try {
            const res = await privateAxios.get(url, config)
            return res.data
        } catch (error) {
            return handleErrors(error)
        }
    }

    return { apiGet }
}
