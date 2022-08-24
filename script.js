const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    document.getElementById("textoAyuda").innerHTML= " "
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"],["i","imes"],["a", "ai"],["o","ober"],["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);           
        }        
    }
    return stringEncriptado;  
    
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    inputTexto.value = ""
    document.getElementById("textoAyuda").innerHTML = "Texto Desencriptado"
    
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"],["i","imes"],["a", "ai"],["o","ober"],["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);           
        }        
    }
    return stringDesencriptado;
    
}
function copiar() {
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    document.getElementById("textoAyuda").innerHTML = "Texto copiado"
    
}