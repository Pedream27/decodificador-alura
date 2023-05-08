function criptografar() {
  let texto = document.getElementById("texto").value;
  let tituloMenssagem = document.getElementById("titulo-menssagem");
  let paragrafo = document.getElementById("paragrafo");
  let boneco = document.getElementById("boneco");

  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMenssagem.textContent = "Texto criptografado com êxito";
    paragrafo.textContent = "";
    boneco.src = "./img/criptografado.jpg";
  } else {
    boneco.src = "./img/boneco.png";
    tituloMenssagem.textContent = "Ningún mensaje fue encontrado";
    paragrafo.textContent = "Digite o texto que você deseja criptografar ou descriptografar";
    swal("Ooops!", "Você deve inserir um texto", "aviso");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMenssagem = document.getElementById("titulo-menssagem");
  let paragrafo = document.getElementById("paragrafo");
  let boneco = document.getElementById("boneco");

  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMenssagem.textContent = "Texto desencriptar com sucesso";
      paragrafo.textContent = "";
      boneco.src = "./img/descriptografado.jpg";
    } else {
      boneco.src = "./img/boneco.png";
      tituloMenssagem.textContent = "Nenhuma Menssagem foi encontrada";
      paragrafo.textContent = "Digite o texto que você deseja criptografar ou descriptografar";
      swal("Ooops!", "Você deve inserir um texto", "aviso");
    }
}
