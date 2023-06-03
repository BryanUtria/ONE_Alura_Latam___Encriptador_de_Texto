const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const texto_mensaje = document.querySelector(".Texto-Mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style = "height: 456px;"
        mensaje.style.backgroundImage = "none"
        texto_mensaje.textContent = "";
        if(textoEncriptado == textArea.value){
            alert("¡No se logro encriptar el texto ingresado!")
        }
        textArea.value = "";
        copia.style.display = "block"
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    if(!validarTexto()) {
        const textoDesencriptado = desencriptar(textArea.value)
        mensaje.value = textoDesencriptado
        mensaje.style = "height: 456px;"
        mensaje.style.backgroundImage = "none"
        texto_mensaje.textContent = "";
        if(textoDesencriptado == textArea.value){
            alert("¡No se logro desencriptar el texto ingresado!")
        }
        textArea.value = "";
        copia.style.display = "block"
    }
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z ]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
    if(textoEscrito == "") {
        alert("Por favor ingrese un valor")
        return true;
    }
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
