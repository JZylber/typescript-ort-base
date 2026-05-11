// Importamos las funciones de consola para leer y escribir datos
import { preguntar, escribir } from './lib/consola.ts';

// Acá empieza tu programa — podés modificar estas líneas
const nombre = await preguntar('¿Cómo te llamás? ');
escribir(`¡Hola, ${nombre}!`);
