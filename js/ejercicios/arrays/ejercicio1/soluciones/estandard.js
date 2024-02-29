import { nombres } from '../../../../data/names.js'

const wordscapitalize = (words = []) => {
    const wordscapitalize = []
    for (const word of words) {
        const [firstLetter, ...wordWithoutFirstLetter] = word
        const firstLetterUpperCase = firstLetter.toUpperCase()
        const wordToString = wordWithoutFirstLetter.join('')
        const newWord = firstLetterUpperCase + wordToString
        wordscapitalize.push(newWord)
    }
    return wordscapitalize
}


const nombresPrimerLetraMayuscula = wordscapitalize(nombres)

console.log(nombresPrimerLetraMayuscula)