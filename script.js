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