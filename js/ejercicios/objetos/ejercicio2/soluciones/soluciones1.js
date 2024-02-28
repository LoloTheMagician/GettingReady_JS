import { usuarios } from "../../../../data/users.js"

const getUserMayorEdad = (usuarios) => {
    return usuarios.sort((usuarioDespues, usuarioAntes) => {
        // console.log('Antes ' , usuarioAntes)
        // console.log('Despues ', usuarioDespues)
        // Desempaquetamos el array de edades 
        const [edadDespues, edadAntes] = [usuarioDespues.edad, usuarioAntes.edad]
        return edadAntes - edadDespues
    }).at(0)
}

console.log(getUserMayorEdad(usuarios))

const getNombre = ({ name }) => name

// Las funciones en JS son de primera clase (First Class Citizens) 
// Se pueden tratar como valores --> se pueden asignar, usar como parámetros
// En este caso asignamos como valor de 'nombreUsuarioMayor' la función 'getNombre'
// Y la función 'getNombre' le pasamos como parámetro otra función ('getUserMayorEdad')
// Estamos haciendo un approach similar a la programación funcional (Buscar información al respecto)
const nombreUsuarioMayor = getNombre(getUserMayorEdad(usuarios))

console.log(nombreUsuarioMayor)