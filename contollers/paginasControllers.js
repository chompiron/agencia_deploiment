import {Viaje} from '../models/Viajes.js';
import {Testimonial} from '../models/testimoniales.js';



const paginaInicio = async(req, res) => {

    const promiseDB =  [];

    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push(Testimonial.findAll({ limit: 3 }));

    //consultar 3 viajes del modelo viaje
    try {
        const resultado = await Promise.all( promiseDB);

        res.render('inicio', {
            pagina : 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
        
    } catch (error) {
        console.log(error);
    }



    
}

const paginaNosotros = (req, res) => {
    

    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => {
   
    const viajes = await Viaje.findAll();
    //console.log(viaje)

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
        
    })
}

const paginaTestimoniles = async (req, res) => {

    
    
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error);
    }

    
}


// Muestra pagina por su slug
const paginaDetalleViajes =  async (req, res) =>{
    //console.log(req.params.viaje);

    const {slug} = req.params;

    try {
        const viajes = await Viaje.findOne({ where : {slug} });
        res.render('viaje', {
            pagina: 'Información Viaje',
            viajes
        })
    } catch (error) {
        console.log(error);
    }
}






export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniles,
    paginaDetalleViajes
}



