import { nombres as names } from "../../../../data/names.js";


// Creamos una función flecha anónima
const toUpperCase = (text) => text.toUpperCase()

const wordsCapitalize = (names, toMayuscula) => {
    const index = 0
    // Utilizamos el método de array 'map', le pasamos una función anónima que se encarga de modificar cada valor dentro del array 'names'
    return names.map((name) =>
        toMayuscula(name.at(index)) + name.slice((index + 1))
    )
}

// Como habíamos comentando, las funciones en JS son de 'Primer Clase', por lo tanto se la podemos asignar a una variable a modo de valor.
// La variable 'nombresPrimerLetraMayuscula' almacena el valor que devuelve la función 'wordsCapitalize'
const nombresPrimerLetraMayuscula = wordsCapitalize(names, toUpperCase)

// Exportamos la variable con un alias
export {
    nombresPrimerLetraMayuscula as nombres
};

