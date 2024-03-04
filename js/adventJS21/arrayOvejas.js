const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

function contarOvejas(ovejas) {
    var ovejasFiltradas = [];

    for (var i = 0; i < ovejas.length; i++) {
        var oveja = ovejas[i];
        if (oveja.color.toLowerCase() === 'rojo' && oveja.name.toLowerCase().includes('n') && oveja.name.toLowerCase().includes('a')) {
            ovejasFiltradas.push(oveja);
        }
    }
  return ovejasFiltradas
}
var ovejasFiltradas = contarOvejas(ovejas);
console.log(ovejasFiltradas);