import CrudService from "../services/crud.service.js"
import { rolModel } from "../models/rol.model.js";

export const createRol = async (req, res) => {

    try {

        await CrudService.agregar(req.body, rolModel)
        return res.status(201).json({
            message: 'Rol creado'
        })
        
    } catch (error) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
    }

}