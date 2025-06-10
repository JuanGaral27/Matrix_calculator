function generarMatriz(idContenedor, rows, cols) {
    const cont = document.getElementById(idContenedor);
    cont.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'matrix-row';
        for (let j = 0; j < cols; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.id = `${idContenedor}-${i}-${j}`;
            input.value = 0;
            rowDiv.appendChild(input);
        }
        cont.appendChild(rowDiv);
    }
}

function leerMatriz(idContenedor) {
    const cont = document.getElementById(idContenedor);
    const inputs = cont.querySelectorAll('input');
    if (inputs.length === 0) return null;
    const rows = cont.querySelectorAll('.matrix-row').length;
    const cols = inputs.length / rows;
    const matriz = [];
    for (let i = 0; i < rows; i++) {
        const fila = [];
        for (let j = 0; j < cols; j++) {
            const inp = document.getElementById(`${idContenedor}-${i}-${j}`);
            const val = parseFloat(inp.value);
            if (isNaN(val)) {
                alert('Por favor ingrese solo números en la matriz.');
                return null;
            }
            fila.push(val);
        }
        matriz.push(fila);
    }
    return matriz;
}

function mostrarResultado(matriz) {
    const resDiv = document.getElementById('resultMatrix');
    resDiv.innerHTML = '';
    if (!matriz) {
        resDiv.innerText = 'Operación no válida o matriz inexistente.';
        return;
    }

    if (typeof matriz === 'number') {
        resDiv.innerText = matriz;
        return;
    }
}