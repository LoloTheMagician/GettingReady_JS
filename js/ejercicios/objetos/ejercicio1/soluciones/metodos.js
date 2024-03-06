import { usuarios } from "../../../../data/users.js";

// Declaramos una variable para evaluar la edad mínima
const EDAD_MINIMA = 18

// Función que recibe la edad del usuario y evalua si es mayor a la edad mínima requerida 
const mayorEdad = ({ edad }) => edad >= EDAD_MINIMA

// Filtramos los usuarios que sean mayor de edad
const filtrarEdad = usuarios.filter(mayorEdad)

// Obtenemos el nombre de los usuarios mayores de edad
const getNombre = filtrarEdad.map(({ name }) => name)


console.log(getNombre)