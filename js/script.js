const btnEncriptar = document.getElementById("botonEncriptar");
const btnDesencriptar = document.getElementById("botonDesencriptar");
const btnCopiar = document.getElementById("botonCopiar");

btnEncriptar.addEventListener("click", function() {
    let texto = document.getElementById("textoDesencriptado");
    if (texto.value.length != 0) {
        const esValido = soloMinusculas(texto.value);
        if (esValido) {
            let encriptado = texto.value
                .replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat")
                .replace(/a/g, "ai");
            document.getElementById("textoEncriptado").innerText = encriptado;
            document.getElementById("textoDesencriptado").value = "";
            let imagen = document.getElementById("imagenEncriptado");
            imagen.classList.add("imagenEncriptadoOculto");
            document.getElementById("textoEncriptado").classList.remove("encriptadoOculto");
            document.getElementById("botonCopiar").classList.remove("botonEncriptadoOculto");
        } else {
            swal.fire({
                title: 'error!',
                text: 'Se tienen que ingresar solo minúsculas',
                icon: 'error',
                confirmbuttontext: 'cool'
            });
        }
    } else {
        swal.fire({
            title: 'error!',
            text: 'Nada para encriptar',
            icon: 'error',
            confirmbuttontext: 'cool'
        });
    }
});

btnDesencriptar.addEventListener("click", function() {
    let texto = document.getElementById("textoEncriptado").value;
    if (texto.length != 0) {
        let desencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ai/g, "a")
            .replace(/ufat/g, "u");
        document.getElementById("textoEncriptado").innerText = desencriptado;
    } else {
        swal.fire({
            title: 'error!',
            text: 'Nada para desencriptar',
            icon: 'error',
            confirmbuttontext: 'cool'
        });
    }
});

btnCopiar.addEventListener("click", function() {
    let textoCopiado = document.getElementById("textoEncriptado");
    if (textoCopiado.value.length != 0) {
        textoCopiado.disabled = false;
        textoCopiado.select();
        document.execCommand("copy");
        textoCopiado.disabled = true;
    } else {
        swal.fire({
            title: 'error!',
            text: 'Nada para copiar',
            icon: 'error',
            confirmbuttontext: 'cool'
        });
    }
});

function esconderImagenDesencriptado() {
    let imagen = document.getElementById("imagenDesencriptado");
    imagen.classList.add("imagenDesencriptadoOculto");
    let textoDesencriptado = document.getElementById("textoDesencriptado");
    textoDesencriptado.classList.remove("desencriptadoOculto");
    textoDesencriptado.focus();
}

const soloMinusculas = (txt) => {
    let regex = /[A-Z]/;
    const mayusculas = (regex.test(txt)); //Tiene mayúsculas?

    regex = /[á-źà-ùÁ-ŹÀ-Ù]/;
    const tildes = (regex.test(txt)) //Tiene tíldes?

    regex = /[0-9]/;
    const numero = (regex.test(txt)) //Tiene números?

    //Falta validar los caractéres especiales

    if (mayusculas || tildes || numero) return false;

    return true;
}