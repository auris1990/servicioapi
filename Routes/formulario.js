//rutas para la gestion de formulario
const express = require('express');
const formularioController = require('../controllers/formularioControllers');
const router_app_form = express.Router();

// el path al que accedera el usuario para ejecutar este metodo [/api/agregarformulario]
// router_app_form.post('/', () => {
//     console.log('creando formulario...');
// })

router_app_form.post('/', formularioController.crearFormulario);
router_app_form.get('/', formularioController.consultarFormulario);
router_app_form.put('/:id',formularioController.actualizarFormulario);
router_app_form.delete('/:id',formularioController.eliminarFormulario);
router_app_form.get('/:id',formularioController.encontrarFormulario);


module.exports = router_app_form;