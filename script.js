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
    const rows = matriz.length;
    const cols = matriz[0].length;
    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'matrix-row';
        for (let j = 0; j < cols; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = matriz[i][j];
            input.readOnly = true;
            rowDiv.appendChild(input);
        }
        resDiv.appendChild(rowDiv);
    }
}

function sumar() {
    const A = leerMatriz('matrizA');
    const B = leerMatriz('matrizB');
    if (!A || !B) return;
    const rowsA = A.length, colsA = A[0].length;
    const rowsB = B.length, colsB = B[0].length;
    if (rowsA !== rowsB || colsA !== colsB) {
        alert('Para sumar, las matrices deben tener la misma dimensión.');
        return;
    }
    const C = [];
    for (let i = 0; i < rowsA; i++) {
        C[i] = [];
        for (let j = 0; j < colsA; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }
    mostrarResultado(C);
}

function restar() {
    const A = leerMatriz('matrizA');
    const B = leerMatriz('matrizB');
    if (!A || !B) return;
    const rowsA = A.length, colsA = A[0].length;
    const rowsB = B.length, colsB = B[0].length;
    if (rowsA !== rowsB || colsA !== colsB) {
        alert('Para restar, las matrices deben tener la misma dimensión.');
        return;
    }
    const C = [];
    for (let i = 0; i < rowsA; i++) {
        C[i] = [];
        for (let j = 0; j < colsA; j++) {
            C[i][j] = A[i][j] - B[i][j];
        }
    }
    mostrarResultado(C);
}
function multiplicar() {
    const A = leerMatriz('matrizA');
    const B = leerMatriz('matrizB');
    if (!A || !B) return;
    const rowsA = A.length, colsA = A[0].length;
    const rowsB = B.length, colsB = B[0].length;
    if (colsA !== rowsB) {
        alert('Para multiplicar, el número de columnas de A debe igualar el número de filas de B.');
        return;
    }
    const C = [];
    for (let i = 0; i < rowsA; i++) {
        C[i] = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += A[i][k] * B[k][j];
            }
            C[i][j] = sum;
        }
    }
    mostrarResultado(C);
}

function multiplicarEscalar() {
    const k = parseFloat(document.getElementById('constante').value);
    const A = leerMatriz('matrizA');
    if (!A || isNaN(k)) {
        alert('Por favor ingrese una matriz válida y un escalar numérico.');
        return;
    }
    const rows = A.length, cols = A[0].length;
    const C = [];
    for (let i = 0; i < rows; i++) {
        C[i] = [];
        for (let j = 0; j < cols; j++) {
            C[i][j] = A[i][j] * k;
        }
    }
    mostrarResultado(C);
}

function transponer() {
    const A = leerMatriz('matrizA');
    if (!A) return;
    const rows = A.length, cols = A[0].length;
    const C = [];
    for (let i = 0; i < cols; i++) {
        C[i] = [];
        for (let j = 0; j < rows; j++) {
            C[i][j] = A[j][i];
        }
    }
    mostrarResultado(C);
}
