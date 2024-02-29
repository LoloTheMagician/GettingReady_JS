import { nombres } from "../../ejercicio1/soluciones/clean.js";

const toLowerCase = (word) => word.toLowerCase()

const hasLetter = (word, letter) => word.includes(letter)

const filterByLetter = (words, letter) =>
    words.filter(word =>
        hasLetter(word, letter)
    )

const filterByLetterIndex = (words, isLetter, letter, index) =>
    words.filter(word =>
        isLetter(toLowerCase(word).at(index), letter)
    )


const namesWithFirstLetter = filterByLetterIndex(nombres, hasLetter, 'g')

console.log(namesWithFirstLetter)

export {
    filterByLetterIndex 
}