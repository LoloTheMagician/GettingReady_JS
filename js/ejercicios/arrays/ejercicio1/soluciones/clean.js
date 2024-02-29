import { nombres as names } from "../../../../data/names.js";

const toUpperCase = (text) => text.toUpperCase()

const wordsCapitalize = (names, toMayuscula) => {
    const index = 0
    return names.map(name =>
        toMayuscula(name.at(index)) + name.slice((index + 1))
    )
}

const nombresPrimerLetraMayuscula = wordsCapitalize(names, toUpperCase)

export {
    nombresPrimerLetraMayuscula as nombres
}

