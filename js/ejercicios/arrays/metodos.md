# Métodos de Array

## Índice

- [Métodos de Array](#métodos-de-array)
  - [Índice](#índice)
    - [Map](#map)
    - [Filter](#filter)
    - [Every](#every)
    - [Some](#some)
    - [Find](#find)
    - [Reduce](#reduce)

### Map

El método _Map_ manipula cada uno de los valores del array.
__Return --> Array__

``` js
const numeros = [1,2,3,4,5,6]
const dobles = numeros.map(numero => numero * 2)
// dobles = [2,4,6,8,10,12]
```

### Filter

El método _Filter_ nos permite filtrar información de un array a partir de una condición.
__Return --> Array__

```js
const numeros = [1,2,3,4,5,6]
const numerosPares = numeros.filter(numero => numero % 2 === 0)
// numerosPares = [2,4,6]
```

### Every

El método _Every_ evalua que todos los elementos de un array cumplan una condición.
__Return --> true | false__

``` js
const numeros = [1,2,3,4,5,6]
const todosMayores = numeros.every(numero => numero > 4)
// false --> 1,2,3,4 no son mayores a 4
```

### Some

El método _Some_ evalua que algún elemento del array cumpla la condición.
__Return --> true | false__

``` js
const numeros = [1,2,3,4,5,6]
const algunoMayor = numeros.some(numero => numero > 4)
// true --> 5 es mayor a 4
```

### Find

El método _Find_ nos devuelve el primer valor que cumpla la condición, en caso de no encontrar ningún valor que la cumpla, devolverá -1.
__Return --> el valor | -1__

``` js
const numeros = [1,2,3,4,5,6]
const encontrarNumero = numeros.find(numero => numero > 4)
// encontrarNumero = 5
// Nos devuelve el primer valor que cumpla la condición.
```

### Reduce
