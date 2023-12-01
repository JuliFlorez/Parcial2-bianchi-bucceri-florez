import { libroSchemaCreate, libroSchemaPatch } from '../schemas/producto.schema.js'

function validateProducto(req, res, next){
    libroSchemaCreate.validate(req.body,{ abortEarly: false })
        .then( (producto) => {
            req.body = producto
            next()
        } )
        .catch((error) => res.status(500).json(error))
}

function validateProductoPatch(req, res, next){
    libroSchemaPatch.validate(req.body,{ abortEarly: false, stripUnknown: true })
        .then( (producto) => {
            req.body = producto
            next()
        } )
        .catch((error) => res.status(500).json(error))
}

export {
    validateProducto,
    validateProductoPatch
}