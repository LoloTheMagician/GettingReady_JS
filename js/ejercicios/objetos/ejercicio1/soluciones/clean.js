import { usuarios } from '../../../../data/users.js'

const getUsuariosMayores = (usuarios, edadMinima) => {

    // Creamos una función que resive la edad del usuario y nos devuelve si es válida
    const isValidEdad = (edad) => edad >= edadMinima

    // Filtramos el array de usuarios para que solo nos devuelva los usuarios con edad válida
    return usuarios.filter(({ edad }) => isValidEdad(edad))

}

const usuariosValidos = getUsuariosMayores(usuarios, 50)

console.log(usuariosValidos)