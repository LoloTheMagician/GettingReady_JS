
const fizzBuzz = (numeroMaximo) => {
    
    const numeros = []

    for (let numero = 1; numero <= numeroMaximo; numero++) {
        
        let valor = ''

        if (numero % 3 === 0) {
            valor += 'Fizz'
        }

        if (numero % 5 === 0) {
            valor += 'Buzz'
        }
        
        valor = valor === '' ? numero : valor 

        numeros.push(valor)

    }
    
    return numeros
}

console.log(fizzBuzz(15))