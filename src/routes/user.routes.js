import { Router } from 'express';
import { createUser } from '../controllers/user.controllers.js';
//import {validateProduct} from '../models/schema/validacionesProducto.js'

const userRoutes = Router();

//userRoutes.get('/getProducts', getUsers )
userRoutes.post('/createUser', createUser )
//userRoutes.get('/getProduct/:id', obtenerUserPorId )

export default userRoutes;