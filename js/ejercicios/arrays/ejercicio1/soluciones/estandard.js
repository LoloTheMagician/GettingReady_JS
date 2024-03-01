import { nombres } from '../../../../data/names.js'

const wordscapitalize = (words = []) => {
    const wordscapitalize = []

    for (const word of words) {
        // Separamos la palabra en dos partes: primer letra (string), resto de la palabra (array)
        const [firstLetter, ...wordWithoutFirstLetter] = word

        const firstLetterUpperCase = firstLetter.toUpperCase()
        // Convertimos el array de letras a una string --> .join(separador = '')
        const wordToString = wordWithoutFirstLetter.join('')

        const newWord = firstLetterUpperCase + wordToString
        // Agregamos la palabra capitalize
        wordscapitalize.push(newWord)

    }

    return wordscapitalize
}


const nombresPrimerLetraMayuscula = wordscapitalize(nombres)

console.log(nombresPrimerLetraMayuscula)