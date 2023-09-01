const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage = "none"
}

function encriptar(strigEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    strigEncriptada = strigEncriptada.toLowerCase();

    for(i=0; i < matrizCodigo.length; i++) {
        if(strigEncriptada.includes(matrizCodigo[i][0])) {
            strigEncriptada = strigEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return strigEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = Desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
    inputTexto.value = ''
  }
  
  function Desencriptar(stringDesencriptada) {
    let matrizCodigo = [['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']]
    stringDesencriptada = stringDesencriptada.toLowerCase()
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptada.includes(matrizCodigo[i][0])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
      }
    }
  
    return stringDesencriptada
  }

  function btnCopiarMensagem() {
    let textoCopiado = document.getElementById('msg')
    textoCopiado.select()
    textoCopiado.setSelectionRange(0, 99999)
    alert('texto copiado')
    mensagem.value = ''
  }