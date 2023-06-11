let parrafo = document.querySelector("#caja");
let captcha = "";
let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


for (let i = 0; i < 4; i++) {
  let indice = Math.floor(Math.random() * caracteres.length);
  captcha += caracteres[indice];
}

parrafo.innerHTML = captcha;

document.querySelector("#contact-form").addEventListener("submit", validarMensaje);

let envioFormulario = document.querySelector("#envioFormulario");
let captchaUsuario = document.querySelector("#captchaUsuario");

function validarMensaje(event) {
  event.preventDefault();
  console.log("mensaje enviado");
  if (captcha == captchaUsuario.value) {
    resetearFormulario();
    envioFormulario.innerHTML = ("Enviado con éxito");
    

  } else {
    envioFormulario.innerHTML = ("No ha podido ser enviado, ingrese el captcha nuevamente");
    cambiarCaptcha();  
  } 
}



nombre.addEventListener('input', limpiarMensajeError);
email.addEventListener('input', limpiarMensajeError);
mensaje.addEventListener('input', limpiarMensajeError);
captchaUsuario.addEventListener('input', limpiarMensajeError);

function limpiarMensajeError() {
  envioFormulario.innerHTML = '';
}

function cambiarCaptcha() {
  captcha = "";
  for (let i = 0; i < 4; i++) {
    let indice = Math.floor(Math.random() * caracteres.length);
    captcha += caracteres[indice];
  }
  
  parrafo.innerHTML = captcha;
}


function resetearFormulario() {
  document.querySelector("#nombre").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#mensaje").value = "";
  document.querySelector("#captchaUsuario").value = "";
  document.querySelector("#envioFormulario").innerHTML = "";
  document.querySelector("#caja").innerHTML = "";
}