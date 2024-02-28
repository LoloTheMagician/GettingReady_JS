const nombre: string = 'Hola'

const numero: number = 1

const nombres: Nombres[] = [
    'Pepe',
    'Lolo',
    'Pepe',
]

type Nombres = 'Pepe' | 'Lolo' | 'Juan' | 'Jose'

const miNombre : Nombres = 'Lolo'

type IsActive = 'Conectado' | 'Ausente' | 'Invicible'

const isActive : IsActive = "Conectado"

type Item = {
    id : number
    name : string
    status ?: string
}

const items : Item[] = [
    {
        id : 1,
        name : 'Item_1',
        status : 'valid'
    },
    {
        id : 2,
        name : 'Item_2',
    }
]


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

const sumar = (a : number,b : number) : number => a + b 