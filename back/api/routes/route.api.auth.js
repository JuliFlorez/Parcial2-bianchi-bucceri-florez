import { Router } from "express"
import * as controllers from '../controllers/controller.api.auth.js'
import { validarCuenta } from '../../middleware/auth.validate.middleware.js'
import { validateToken } from "../../middleware/token.validate.middleware.js"
import { validatePerfil } from "../../middleware/auth.validate.middleware.js"
const route = Router()

route.post('/cuenta/register', [validarCuenta], controllers.crearCuenta);

//Login
route.post('/cuenta/login', [validarCuenta],controllers.login)
//Salir
route.delete("/cuenta",[validarCuenta], controllers.logout)

route.post("/perfil",[ validateToken, validatePerfil], controllers.crearPerfil)

route.get("/perfil",[ validateToken ], controllers.obtenerPerfil)

export default route
