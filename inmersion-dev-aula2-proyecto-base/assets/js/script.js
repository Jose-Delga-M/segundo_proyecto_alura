let listaNombresGastos = [];
let listaValoresGastos = [];
let indiceEdicion = -1;

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    if (indiceEdicion === -1) {
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
    } else {
        listaNombresGastos[indiceEdicion] = nombreGasto;
        listaValoresGastos[indiceEdicion] = valorGasto;
        indiceEdicion = -1;
    }

    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');

    let htmlLista = '';
    let totalGasto = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const descripcion = document.getElementById('descripcion').value;
        const valorGasto = Number(listaValoresGastos[posicion]);
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - ${descripcion} <button onclick="editar(${posicion});">Editar</button> <button onclick="eliminarGasto(${posicion});">Eliminar</button></li>`;
        totalGasto += valorGasto;

        if (valorGasto > 150) {
            alert("Es un gasto muy grande.");
        }
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGasto.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = "";
    document.getElementById('valorGasto').value = "";
    document.getElementById('descripcion').value = "";
    indiceEdicion = -1;
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function editar(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcion').value = document.getElementById('descripcion').value;
    indiceEdicion = posicion;
}


