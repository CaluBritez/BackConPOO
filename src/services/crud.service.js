

class CrudService {
    constructor() { }

    async agregar(producto, modelo) {
        try {
            return await modelo.create(producto)
        } catch (error) {
            console.log('Error al crear',error)
        }
    }
    async listar(modelo) {
        try {
            return await modelo.findAll()
        } catch (error) {
            console.log('Error al listar',error)
        }
    }
    async obtener(id, modelo) {
        try {
            return await modelo.findByPk(id)
        } catch (error) {
            console.log('Error al obtener el producto',error)
        }
    }
}
export default new CrudService()