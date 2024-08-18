import ProductService from "../services/product.service.js"
import { productModel } from "../models/product.model.js";


export const getProducts = async (req, res) => {

    try {
        const products = await ProductService.listarProductos();
        if(products.length === 0 || !products){
            throw({
                statusCode: 404,
                status: 'Not Found',
                message: 'No se han encontrado productos'
            })
        }
        return res.json(products)

    } catch (err) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
    }

}
export const createProduct = async (req, res) => {

    try {

        await ProductService.agregar(req.body, productModel)
        return res.status(201).json({
            message: 'Producto creado'
        })
        
    } catch (error) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
    }

}

export const obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await ProductService.obtenerProducto(req.params.id)
        res.status(200).json(producto)
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log('No se encontro producto',error)
    }
}
