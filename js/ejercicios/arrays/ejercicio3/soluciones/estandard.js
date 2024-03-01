
const fizzBuzz = (numeroMaximo, ...divisibles) => {

    const numeros = []

    for (let numero = 1; numero <= numeroMaximo; numero++) {
        
        let valor = ''

        for (let indexDivisible = 0; indexDivisible < divisibles.length; indexDivisible++) {

            const divisible = divisibles[indexDivisible]
            const {numero : div, texto} = divisible
            
            if(numero % div === 0){
                valor += texto
            }

        }

        numeros.push(valor || numero)
    }

    return numeros
}

console.log(
    fizzBuzz(
        21,
        {
            numero: 3,
            texto: 'Fizz'
        },
        {
            numero: 7,
            texto: 'Buzz'
        },
    )
)