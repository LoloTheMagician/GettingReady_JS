import { usuarios } from "../../../../data/users.js";

const usuariosMayores = (usuarios, edadMinima) => {

    const usuariosFiltrados = []
    for (const user of usuarios) {
        const { edad } = user
        if (edad >= edadMinima)
            usuariosFiltrados.push(
                user
            )
    }

    return usuariosFiltrados

}

const filtrarUsuariosMayores = usuariosMayores(usuarios, 18)

export {
    filtrarUsuariosMayores as usuariosValidos
}