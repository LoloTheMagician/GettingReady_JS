
type Characters = {
    name: string
    age: number | 'unknown'
    series: string
    alive?: boolean
}

const characters: Characters[] = [
    {
        name: 'Finn',
        age: 14,
        series: 'Hora de Aventura'
    },
    {
        name: 'Coraje',
        age: 'unknown',
        series: 'Coraje el perro cobarde',
        alive: true
    },
]

const getCharactersName = (characters: Characters[]): string[] => {
    return characters.map(({ name }) => name)
}

console.log(getCharactersName(characters))