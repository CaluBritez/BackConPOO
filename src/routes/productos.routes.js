import { Router } from 'express';
import { createProduct, getProducts, obtenerProductoPorId } from '../controllers/productos.controllers.js';

const router = Router();

router.get('/', (req, res) => res.send('Hello World'))
router.get('/products', getProducts )
router.post('/product', createProduct )
router.get('/product/:id', obtenerProductoPorId )

export default router;