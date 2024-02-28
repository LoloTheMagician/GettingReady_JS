var nombre = 'Hola';
var numero = 1;
var nombres = [
    'Pepe',
    'Lolo',
    'Pepe',
];
var miNombre = 'Lolo';
var isActive = "Conectado";
var items = [
    {
        id: 1,
        name: 'Item_1',
        status: 'valid'
    },
    {
        id: 2,
        name: 'Item_2',
    }
];
var characters = [
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
];
var getCharactersName = function (characters) {
    return characters.map(function (_a) {
        var name = _a.name;
        return name;
    });
};
console.log(getCharactersName(characters));
var sumar = function (a, b) { return a + b; };
