function encriptar(){
    let texto = document.getElementById("textoingresar").value;
    let titulomMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("imgMuñeco");
    
    let textocifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "ines") 
    .replace(/a/gi, "ai")  
    .replace(/o/gi, "ober")
    .replace(/u/gi, "uful");

    if (document.getElementById("textoingresar").value.length != 0){
        document.getElementById("textoingresar").value = textocifrado;
        titulomMensaje.textContent = "Texto fue encriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./img/Correcto.png";
    }else{
        muñeco.src = "./img/muñeco.png"
        titulomMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        Swal.fire({title:"!!warning¡¡",
        text:"Ingresar texto a encriptar", 
        showConfirmButton: false,
        timer: 1000})
    }
}

function desencriptar(){
    let texto = document.getElementById("textoingresar").value;
    let titulomMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("imgMuñeco");
    
    let textocifrado = texto
    .replace(/enter/gi, "e")
    .replace(/ines/gi, "i") 
    .replace(/ai/gi, "a")  
    .replace(/ober/gi, "o")
    .replace(/uful/gi, "u");

    if (document.getElementById("textoingresar").value.length != 0){
        document.getElementById("textoingresar").value = textocifrado;
        titulomMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./img/Correcto.png";
    }else{
        muñeco.src = "./img/muñeco.png"
        titulomMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        Swal.fire({title:"!!warning¡¡",
        text:"Primero debes ingresar un texto", 
        showConfirmButton: false,
        timer: 1000})
    }
}