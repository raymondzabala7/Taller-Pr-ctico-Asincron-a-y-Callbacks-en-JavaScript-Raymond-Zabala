function realizarOperacion(num1, num2, operacionCallback) {
    console.log(`Operación con: ${num1} y ${num2}`);
    operacionCallback(num1, num2);
}

function sumar(a, b) {
    console.log(`Resultado Suma: ${a + b}`);
}

// TODO
function restar(a, b) {
    console.log(`Resultado Resta: ${a - b}`);
}

// TODO
function multiplicar(a, b) {
    console.log(`Resultado Multiplicar: ${a * b}`);
}

// TODO
realizarOperacion(10, 5, sumar);
realizarOperacion(10, 5, restar);
realizarOperacion(10, 5, multiplicar);

function solicitarJSON(callback) {
    setTimeout(function() {
        callback();
    }, 3000);
}

function reproducirAudio(callback) {
    setTimeout(function() {
        callback();
    }, 1000);
}

function leerSensor(callback) {
    setTimeout(function() {
        callback();
    }, 500);
}

console.log("--- Iniciando procesos asíncronos ---");

solicitarJSON(() => console.log("Archivo JSON recibido."));
reproducirAudio(() => console.log("Audio finalizado."));
leerSensor(() => console.log("Datos del sensor listos."));

function simularDescarga(nombreArchivo, callback) {
    console.log(`Iniciando la descarga de: ${nombreArchivo}...`);
    
    setTimeout(function() {
        console.log(`Descarga de ${nombreArchivo} finalizada.`);
        callback();
    }, 4000);
}

simularDescarga("manual.pdf", () => {
    console.log("Archivo listo para abrir.");
});