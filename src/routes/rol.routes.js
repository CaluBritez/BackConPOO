import { Router } from 'express';
import { createRol } from '../controllers/rol.controllers.js';
//import {validateProduct} from '../models/schema/validacionesProducto.js'

const rolRoutes = Router();

rolRoutes.post('/createRol', createRol )

export default rolRoutes;