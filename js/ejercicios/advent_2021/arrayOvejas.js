const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

function contarOvejas(ovejas) {
  const ovejasFiltradas = [];

  for (const oveja of ovejas) {
    const { color, name } = oveja
    const nameLowerCase = name.toLowerCase()
    if (
      color.toLowerCase() === 'rojo'
      && nameLowerCase.includes('n')
      && nameLowerCase.includes('a')
    )
      ovejasFiltradas.push(oveja);
  }

  return ovejasFiltradas
}

const ovejasFiltradas = contarOvejas(ovejas);
console.log(ovejasFiltradas);