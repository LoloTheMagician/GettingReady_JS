# Ejercicios

---

## Ejercicios 1

### Nombres propios

A partir de un array de nombres, necesitamos transformar cada nombre para que su primer letra este en mayúsculas

### Requisitos

+ Necesitamos crear uan función que reciba como parámetro un array de strings
+ Tenemos que devolver un array de strings

---

## Ejercicios 2

### Filtrar nombre por letra

Queremos obtener todos los nombres que contengan una letra especificada por el usuario

### Requisitos

+ Necesitamos crear uan función que reciba como parámetro un array de strings y un string
+ Tenemos que devolver un array de strings
+ Se tomarán las letras minúsculas y mayúsculas como las mismas letras

---

## Ejercicios 3

### Fizz Buzz

Del 0 al 100, queremos almacenar en un array en caso del que el número sea divisible entre 3 guardar __Fizz__, en caso de ser divisible entre 5 guardar __Buzz__, y en caso que sea divisible tanto por 3 como por 5 devolver __FizzBuzz__, si no cumple ninguna de las condiciones anteriores, agregar el número

### Requisitos

+ Crear un array que almacene los datos
+ Crear una función que reciba como parámetro el número máximo para evaluar (en el ejemplo 100)

### Ejemplos

`
    const ejemplo = fizzBuzz(15)
    console.log(ejemplo)
    // [
        1,
        2,
        'Fizz',
        4,
        'Buzz',
        'Fizz',
        7,
        8,
        'Fizz',
        'Buzz',
        11,
        'Fizz',
        13,
        14,
        'FizzBuzz'
    ]
`