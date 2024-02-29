import { nombres } from "../../ejercicio1/soluciones/clean.js";

const LETTER = 'g'

const toLowerCase = (word) => word.toLowerCase()

const hasLetter = (word, letter) => word.includes(letter)

const wordToLowerCase = (words) => words.map(word => toLowerCase(word))

const filterByLetter = (words, letter) =>
    words.filter(word =>
        hasLetter(word, letter)
    )

const filterByLetterIndex = (words, isLetter, letter, index) =>
    words.filter(word =>
        isLetter(word.at(index), letter)
    )

const namesWithFirstLetter = filterByLetterIndex(filterByLetter(wordToLowerCase(nombres), LETTER), hasLetter, LETTER)

console.log(filterByLetter(nombres, LETTER))
console.log(namesWithFirstLetter)

export {
    filterByLetterIndex
}