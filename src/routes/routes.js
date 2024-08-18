import { Router } from 'express';
import productRoutes from './products.routes.js';
import userRoutes from '../routes/user.routes.js';
import rolRouter from '../routes/rol.routes.js';


const router = Router();

router.get('/', (req, res) => res.send('Hello World'))
router.use('/product', productRoutes)
router.use('/user', userRoutes)
router.use('/rol', rolRouter)

export { router }