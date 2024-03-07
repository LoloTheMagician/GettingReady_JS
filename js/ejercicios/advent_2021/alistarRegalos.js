const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(carta) {
    let nuevosRegalosF = [];
    let regalosFiltrados = carta.trim().split(" ");
    for (let index = 0; index < regalosFiltrados.length; index++) {
        const palabra = regalosFiltrados[index];
     
     if (palabra.includes("_") === false) {
        nuevosRegalosF.push(palabra)       
    }
   
    }
    let regalos = {};
    nuevosRegalosF.forEach(palabra => {
        if (regalos[palabra]){
            regalos[palabra]++;
        } else {
            regalos[palabra] = 1;
        }
        
    });
    console.log(regalos)
    return regalos;
   }


const regalos = listGifts(carta);
console.log(regalos);