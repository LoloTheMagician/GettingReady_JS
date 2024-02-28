import { usuarios } from "../../../../data/users.js";

const getMayor = (usuarios) =>
    usuarios
        .sort(({ edad: edadSiguienteUsuario }, { edad: edadAnteriorUsuario }) =>
            edadAnteriorUsuario - edadSiguienteUsuario
        ).at(0)

const getName = ({ name }) => name

const nameUsuarioMayor = getName(getMayor(usuarios))

console.log(nameUsuarioMayor)