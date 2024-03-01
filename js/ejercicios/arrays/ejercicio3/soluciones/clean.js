
const fizzBuzz = (divisibles, ...rangoNumerico) => {

    const [numeroMinimo, numeroMaximo] = rangoNumerico
    const numeros = []

    for (let numero = numeroMinimo; numero <= numeroMaximo; numero++) {

        let valor = ''

        for (const { numero: divisor, texto } of divisibles) {

            const moduloValido = isDivisible(numero, divisor)
            if (moduloValido) valor += texto

        }

        numeros.push(
            valor || numero
        )
    }

    return numeros
}

const getDivisibles = (...divisibles) => divisibles

const isDivisible = (numero, divisor) => numero % divisor === 0

console.log(
    fizzBuzz(
        getDivisibles(
            {
                numero: 3,
                texto: 'Fizz'
            },
            {
                numero: 5,
                texto: 'Buzz'
            },
        ),
        1,
        15
    )
)