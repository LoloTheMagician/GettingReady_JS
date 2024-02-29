# Ejercicios

---

## Ejercicio 1

### Obtener usuarios mayores de edad

Necesitamos filtrar aquellos usuarios que sean mayores de edad (o edad _especificada_)

### Requisitos

+ Crear una **función**
+ Devolver un **objeto** con la información del usuario
+ pasar como **parámetro** la edad a filtrar

`
const usuarios = [
    {
        id: 1,
        name: 'Manolo',
        edad: 54,
    },
    {
        id: 2,
        name: 'Lolo',
        edad: 18,
    },
]
const filtrarUsuariosMayores = usuariosMayores(usuarios, 18)
console.log(filtrarUsuariosMayores) // [
    {
        id: 1,
        name: 'Manolo',
        edad: 54,
    }
]
`
___

## Ejercicio 2

### Obtener el nombre del usuario más longevo

Devolver únicamente el nombre del usuario con mayor edad

### Requisitos

+ Crear una función
+ Devolver un string
