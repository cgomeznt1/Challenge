// Función que encripta el texto usando el cifrado César
function encriptarCesar(texto, desplazamiento) {
    return texto.split('').map(char => {
        const code = char.charCodeAt(0); // Obtiene el código ASCII del carácter
        if (code >= 65 && code <= 90) {
            // Si el carácter es una letra mayúscula
            return String.fromCharCode(((code - 65 + desplazamiento) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            // Si el carácter es una letra minúscula
            return String.fromCharCode(((code - 97 + desplazamiento) % 26) + 97);
        } else {
            // Si el carácter no es una letra, se deja sin cambios
            return char;
        }
    }).join(''); // Une todos los caracteres en un solo string
}

// Función que desencripta el texto usando el cifrado César
function desencriptarCesar(texto, desplazamiento) {
    return texto.split('').map(char => {
        const code = char.charCodeAt(0); // Obtiene el código ASCII del carácter
        if (code >= 65 && code <= 90) {
            // Si el carácter es una letra mayúscula
            return String.fromCharCode(((code - 65 - desplazamiento + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            // Si el carácter es una letra minúscula
            return String.fromCharCode(((code - 97 - desplazamiento + 26) % 26) + 97);
        } else {
            // Si el carácter no es una letra, se deja sin cambios
            return char;
        }
    }).join(''); // Une todos los caracteres en un solo string
}

// Función que se ejecuta al hacer clic en el botón "Encriptar"
function encriptarTexto() {
    const inputText = document.getElementById('inputText').value; // Obtiene el texto de entrada
    if (inputText.trim() === "") {
        alert("Por favor, ingresa un texto para encriptar."); // Muestra una alerta si no hay texto
        return;
    }
    const shift = Math.floor(Math.random() * 25) + 1; // Genera un desplazamiento aleatorio entre 1 y 25
    const encryptedText = encriptarCesar(inputText, shift); // Encripta el texto
    document.getElementById('inputText').value = encryptedText; // Muestra el texto encriptado en el área de entrada
    localStorage.setItem('shift', shift); // Almacena el desplazamiento en el almacenamiento local para su uso posterior
    document.getElementById('shiftDisplay').innerText = `Desplazamiento utilizado: ${shift}`; // Muestra el desplazamiento utilizado
    alert("El mensaje ha sido encriptado."); // Muestra una alerta de que el mensaje ha sido encriptado
}

// Función que se ejecuta al hacer clic en el botón "Desencriptar"
function desencriptarTexto() {
    const inputText = document.getElementById('inputText').value; // Obtiene el texto de entrada
    const shiftSelect = document.getElementById('shiftSelect'); // Obtiene el elemento select
    const shift = parseInt(shiftSelect.value); // Obtiene el valor seleccionado
    if (isNaN(shift)) {
        alert('Por favor, selecciona un desplazamiento válido.'); // Muestra una alerta si no hay un desplazamiento válido
        return;
    }
    const decryptedText = desencriptarCesar(inputText, shift); // Desencripta el texto
    document.getElementById('inputText').value = decryptedText; // Muestra el texto desencriptado en el área de entrada
    document.getElementById('shiftDisplay').innerText = `Desplazamiento utilizado: ${shift}`; // Muestra el desplazamiento utilizado
    alert("El mensaje ha sido desencriptado."); // Muestra una alerta de que el mensaje ha sido desencriptado
}

// Función que habilita o deshabilita el botón "Encriptar" según si hay texto en el área de entrada
function toggleEncryptButton() {
    const inputText = document.getElementById('inputText').value; // Obtiene el texto de entrada
    const encryptButton = document.getElementById('encryptButton'); // Obtiene el botón de encriptar
    encryptButton.disabled = inputText.trim() === ""; // Deshabilita el botón si el texto está vacío
}

// Asegura que el script se ejecute después de que el DOM esté completamente cargado
window.onload = function() {
    document.getElementById('shiftDisplay').innerText = 'Desplazamiento utilizado: N/A'; // Muestra el estado inicial del desplazamiento
};
