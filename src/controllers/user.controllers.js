import CrudService from "../services/crud.service.js"
import { userModel } from "../models/user.model.js";

export const createUser = async (req, res) => {

    try {

        await CrudService.agregar(req.body, userModel)
        return res.status(201).json({
            message: 'Usuario creado'
        })
        
    } catch (error) {
        return res.status(err.statusCode || 500).json({
            message: err.message,
            status: err.status
        })
    }

}