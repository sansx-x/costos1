function calcularCosto() {
    // Obtener valores de los campos de entrada
    const precioCacao = parseFloat(document.getElementById('precioCacao').value);
    const cantidadCacao = parseFloat(document.getElementById('cantidadCacao').value);
    const precioAzucar = parseFloat(document.getElementById('precioAzucar').value);
    const cantidadAzucar = parseFloat(document.getElementById('cantidadAzucar').value);
    const precioVainilla = parseFloat(document.getElementById('precioVainilla').value);
    const cantidadVainilla = parseFloat(document.getElementById('cantidadVainilla').value);
    const precioLeche = parseFloat(document.getElementById('precioLeche').value);
    const cantidadLeche = parseFloat(document.getElementById('cantidadLeche').value);
    const precioChocolate = parseFloat(document.getElementById('precioChocolate').value);
    const cantidadChocolate = parseFloat(document.getElementById('cantidadChocolate').value);
    // Calcular costos individuales
    const costoCacao = (precioCacao / 1000) * cantidadCacao;
    const costoAzucar = (precioAzucar / 1000) * cantidadAzucar;
    const costoVainilla = (precioVainilla / 1000) * cantidadVainilla;
    const costoLeche = (precioLeche / 1000) * cantidadLeche;
    const costoChocolate = precioChocolate / 1000 * cantidadChocolate;

    // Calcular costo total
    const costoTotal = costoCacao + costoAzucar + costoVainilla + costoLeche + costoChocolate;

    // Mostrar resultado
    document.getElementById('resultado').textContent = `Costo Total: ${costoTotal.toFixed(2)} Bs`;
}
