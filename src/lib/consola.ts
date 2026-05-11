import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export async function preguntar(pregunta: string): Promise<string> {
  const rl = readline.createInterface({ input, output });
  const respuesta = await rl.question(pregunta);
  rl.close();
  return respuesta.trim();
}

export async function preguntarNumero(pregunta: string): Promise<number> {
  let numero: number;
  do {
    const texto = await preguntar(pregunta);
    numero = Number(texto);
    if (isNaN(numero)) {
      escribir('Por favor ingresá un número válido.');
    }
  } while (isNaN(numero));
  return numero;
}

export function escribir(mensaje: string): void {
  console.log(mensaje);
}
