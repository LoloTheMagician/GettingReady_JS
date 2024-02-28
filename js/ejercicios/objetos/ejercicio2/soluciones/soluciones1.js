import { usuarios } from "../../../../data/users";

const getUserMayorEdad = (usuarios) => {
    return usuarios.sort((a,b) => {
        const {edad : edadPrimer} = a
        const {edad : edadSegundo} = b
        return edadPrimer - edadSegundo
    })
}

console.log(getUserMayorEdad(usuarios))
const getNombre = () => {

}