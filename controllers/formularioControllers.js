const Formulario = require("../models/Formulario");

exports.crearFormulario = async(req, res) => {
    // console.log('creando formulario desde el controlador');
    // console.log(req.body);
    try {
        let data_formulario;
        data_formulario = new Formulario(req.body);
        await data_formulario.save();
        res.send(data_formulario)
    } catch (error) {
        console.log(error)
        res.status(500).send("Advertencia.. hay un error en la API... :(")
    }
}

exports.consultarFormulario = async(req, res) => {
    try {

        const mis_forms = await Formulario.find();
        res.json(mis_forms)


    } catch (error) {
        console.log(error)
        res.status(500).send(" Advertencia..No se puede consultar la informacion :(")
    }
}

exports.actualizarFormulario = async(req,res)=>{

    try{
        console.log(req.body)

        const{tipoidentificacion,numeroidentificacion,nombre,apellido,telefono,direccion,email,genero }= req.body
let data_formulario= await Formulario.findById(req.params.id);
console.log(data_formulario)
if(!data_formulario){
    res.status(404).json({ msg: 'Advertencia..No existe el formulario solicitado'})
}

data_formulario.tipoidentificacion=tipoidentificacion;
data_formulario.numeroidentificacion=numeroidentificacion;
data_formulario.nombre=nombre;
data_formulario.apellido=apellido;
data_formulario.telefono=telefono;
data_formulario.direccion=direccion;
data_formulario.email=email;
data_formulario.genero=genero;

data_formulario= await Formulario.findOneAndUpdate({_id: req.params.id}, data_formulario, { new :true});
res.json(data_formulario);
    } catch(error){

        console.log(error)
        res.status(500).send("Advertencia.. no se puede actualizar")
    
    }
}
exports.eliminarFormulario = async(req,res)=>{

try{

    let data_formulario= await Formulario.findById(req.params.id);

    if(!data_formulario){
        res.status(404).json({msg: 'No existe el formulario que se desea eliminar'})
    }
    await Formulario.findOneAndRemove({ _id:req.params.id});
    res.json({msg:'exito formulario eliminado'});



}catch(error){

        console.log(error)
        res.status(500).send(" El formulario no se puede eliminar")
    
    }

}

exports.encontrarFormulario = async(req, res) => {
    try {
        let data_formulario = await Formulario.findById(req.params.id);

        if (!data_formulario) {
            res.status(404).json({ msg: 'No existe el formulario que solicitas' });
        }

        res.json(data_formulario);


    } catch (error) {
        console.log(error);
        res.status(500).send("No se puede hacer la consulta, error interno");
    }
}