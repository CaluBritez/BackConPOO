import { productModel } from "../models/product.model.js";


class ProductService {
    constructor() { }

    async agregar(producto, modelo) {
        try {
            return await modelo.create(producto)
        } catch (error) {
            console.log('Error al crear el producto',error)
        }
    }
    async listarProductos(producto) {
        try {
            return await productModel.findAll(producto)
        } catch (error) {
            console.log('Error al listar los Productos',error)
        }
    }
    async obtenerProducto(id) {
        try {
            return await productModel.findByPk(id)
        } catch (error) {
            console.log('Error al obtener el producto',error)
        }
    }
}
export default new ProductService()


/*
export const productService = {
    
    async agregarProducto(producto) {
        try {
            return await productModel.create(producto)
        } catch (error) {
            console.log('Error al crear el producto',error)
        }
    },
    async listarProductos(producto) {
        try {
            return await productModel.findAll(producto)
        } catch (error) {
            console.log('Error al listar los Productos',error)
        }
    },
}
*/