import { Router } from 'express'
import * as controllers from '../controllers/controller.api.productos.js'
import { validateProducto, validateProductoPatch } from '../../middleware/producto.validate.middleware.js'
import { validateToken } from '../../middleware/token.validate.middleware.js'

const route = Router()

route.get('/productos',[validateToken],controllers.getProductos)

route.get('/productos/:id',[validateToken], controllers.getProductoById)

route.all('/productos/:id',[validateToken],function todos(req, res, next) {
    console.log("tengo un rol valido" )
    next()
})

route.post('/productos',[validateProducto], controllers.agregarProducto)

route.put('/productos/:id', controllers.remplazarProducto)

route.patch('/productos/:id',[validateProductoPatch], controllers.actualizarProducto)

route.delete("/productos/:id", controllers.eliminarProducto)

export default route