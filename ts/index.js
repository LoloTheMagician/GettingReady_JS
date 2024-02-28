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
