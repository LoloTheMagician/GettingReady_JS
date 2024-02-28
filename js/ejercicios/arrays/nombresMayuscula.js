
const nombres = [
    'lolo',
    'pepe',
    'pedrito'
]

//Crear un array de palabras que contengan la letra 'p'

//Crear un nuevo array con cada nombre su primer letra en mayúscula

const nombresMayuscula = []

for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i]
    const [primerLetra, ...restoPalabra] = nombre
    const primerLetraMayuscula = primerLetra.toUpperCase()
    nombresMayuscula.push(
        primerLetraMayuscula + restoPalabra.join('')
    )
}

console.log(nombresMayuscula)