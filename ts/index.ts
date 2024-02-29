// TypeScript infiere los tipos de las variables asignadas, no necesitamos explicitarlo
// Nuestra variable usuario es de tipo 'string', TS sobreentiende su tipo mediante el valor asignado
const usuario = 'Carlos'
// También podemos nosotros explicitar el tipo de una variable
const nombre: string = 'Hola'

// Ambas variables de tipo 'number' --> integer
const number = 25
const numero: number = 1

// Variable de tipo boolean
const isOpen: boolean = true

// Arrays

// En los Arrays y Objetos, a partir del tipo de su contenido, se infiere el tipo del array
// En este caso el array 'animales' es de tipo 'string[]', porque solamente contiene valores de tipo 'string'
const animales = [
    'León',
    'Gato',
    'Perro'
]
// Ambos arrays son de tipo 'string[]'
const frutas: string[] = [
    'Pera',
    'Manzana',
    'Banana'
]

// Array númerico --> tipo 'number[]'
const primos: number[] = [
    2,
    3,
    5,
    7,
    13
]

// También se pueden crear arrays de múltiples tipos
// TS infiere el tipo del array 'cosas' de la siguiente manera --> '(string | number | boolean)[]'
// Significa que el contenido del array tiene que ser o de tipo string o de tipo o de tipo boolean
const cosas: (string | number | boolean)[] = [
    'Hola',
    3.14,
    true,
    'Adiós'
]

/**
 * En TS también podemos crear nuestros propios tipos y reutilizarlos en diferentes partes del código
 * Los tipos se escriben en 'PascalCase'
 */

/**
 * Hemos creado un tipo propio, que nos permite asignar valores string o number
 * La pleca '|' nos permite que la variable sea de un tipo 'o' de otro
 */
type StringOrNumber = string | number

/**
 * Aquí nos hemos creado un tipo 'Nombre' que solo puede contener los strings 'Pepe', 'Lolo', 'Juan' o 'Jose'
 * Cualquier otro nombre o string provocaría un error
 */
type Nombre = 'Pepe' | 'Lolo' | 'Juan' | 'Jose'

/**
 * A partir de nuestro tipo 'Nombre', hemos creado un array que únicamente contiene valores de tipo 'Nombre'
 */
const nombres: Nombre[] = [
    'Pepe',
    'Lolo',
    'Pepe',
]


const miNombre: Nombre = 'Lolo'

type IsActive = 'Conectado' | 'Ausente' | 'Invicible'

const isActive: IsActive = "Conectado"

type Item = {
    id: number
    name: string
    status?: string
}

const items: Item[] = [
    {
        id: 1,
        name: 'Item_1',
        status: 'valid'
    },
    {
        id: 2,
        name: 'Item_2',
    }
]


type Characters = {
    name: string
    age: number | 'unknown'
    series: string
    alive?: boolean
}


const characters: Characters[] = [
    {
        name: 'Finn',
        age: 14,
        series: 'Hora de Aventura'
    },
    {
        name: 'Coraje',
        age: 'unknown',
        series: 'Coraje el perro cobarde',
        alive: true
    },
]

const getCharactersName = (characters: Characters[]): string[] => {
    return characters.map(({ name }) => name)
}

console.log(getCharactersName(characters))

const sumar = (a: number, b: number): number => a + b 