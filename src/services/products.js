import axios from "axios"
import { rootApi } from "../api"

const getProducts = () => {
    return axios.get(rootApi + "/products")
}

const getProduct = (id) => {
    return axios.get(`${rootApi}/products/${id}`)
}
const editProduct = (id, newProduct) => {
    return axios.patch(`http://localhost:3001/products/${id}`, newProduct)
}
const deleteProduct = (id) => {
    return axios.delete(`${rootApi}/products/${id}`)
}

export default {
    getProducts,
    getProduct,
    deleteProduct,
    editProduct
}