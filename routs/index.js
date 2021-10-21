import express from 'express';
import { paginaInicio , 
    paginaNosotros, paginaViajes, 
    paginaTestimoniles, 
    paginaDetalleViajes} from '../contollers/paginasControllers.js';

import { guardarTestimonial } from '../contollers/testimonialControllers.js';






const router = express();



router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros );

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViajes);

router.get('/testimoniales', paginaTestimoniles );
router.post('/testimoniales', guardarTestimonial );


export default router;



