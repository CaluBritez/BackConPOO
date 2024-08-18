import { Router } from 'express';
import { createProduct, getProducts, obtenerProductoPorId } from '../controllers/productos.controllers.js';
import {validateProduct} from '../models/schema/validacionesProducto.js'

const productRoutes = Router();

productRoutes.get('/getProducts', getProducts )
productRoutes.post('/createProduct', validateProduct, createProduct )
productRoutes.get('/getProduct/:id', obtenerProductoPorId )

export default productRoutes;