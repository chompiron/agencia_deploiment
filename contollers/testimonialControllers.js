import { Testimonial } from '../models/testimoniales.js';
import { Viaje } from '../models/Viajes.js';






const guardarTestimonial = async (req, res) => {

    //Validar
    const {nombre, correo, mensaje} = req.body;
    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje : 'El nombre está vacío'})
    }
    if(correo.trim() === '') {
        errores.push({mensaje : 'El correo está vacío'})
    }
    if(mensaje.trim() === '') {
        errores.push({mensaje : 'El mensaje está vacío'})
    }

    //console.log(errores);
    if(errores.length > 0){
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    }else{
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimoniales')
            
        } catch (error) {
            console.log(error);
        }

    }

}

const guardarBD = (req, res) => {
    res.render('admin', {
        pagina: 'Admin'
    })
}

const guardarBDS = async (req , res ) => {
    
    //Validar
    const {titulo, precio, fecha_ida,
          fecha_vuelta, 
          imagen, descripcion,
          disponibles, slug} = req.body;

    const errores = [];

    if(titulo.trim() === '') {
        errores.push({mensaje : 'El titulo está vacío'})
    }
    if(precio.trim() === '') {
        errores.push({mensaje : 'El precio está vacío'})
    }
    if(fecha_ida.trim() === '') {
        errores.push({mensaje : 'El fecha_idae está vacío'})
    }
    if(fecha_vuelta.trim() === '') {
        errores.push({mensaje : 'El fecha_vuelta está vacío'})
    }
    if(imagen.trim() === '') {
        errores.push({mensaje : 'El imagen está vacío'})
    }
    if(descripcion.trim() === '') {
        errores.push({mensaje : 'El descripcion está vacío'})
    }
    if(disponibles.trim() === '') {
        errores.push({mensaje: 'El disponibles está vacío'})
    }
    if(slug.trim() === '') {
        errores.push({mensaje: 'El slug está vacío'})
    }

    

    //console.log(errores);
    if(errores.length > 0){
        
        res.render('admin', {
            pagina: 'Admin',
            errores,
            titulo,
            precio,
            fecha_ida,
            fecha_vuelta,
            imagen,
            descripcion,
            disponibles,
            slug
            
        });
    }else{
        try {
            await Viaje.create({
                titulo,
                precio,
                fecha_ida,
                fecha_vuelta,
                imagen,
                descripcion,
                disponibles,
                slug
            })
            res.redirect('/fernando')
            
        } catch (error) {
            console.log(error);
        }

    }
}



export {
    guardarTestimonial,
    guardarBD,
    guardarBDS,
    
}





