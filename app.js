//implementacion de para que cada uno de los campos lleve el el dato correcto
function validarCampo(input, validar, mensajeError) {

    const mensaje = document.createElement("h1");
    input.insertAdjacentElement("afterend", mensaje);

    input.addEventListener("input", function () {

        if (!validar.test(this.value)) {
            mensaje.textContent = mensajeError;
            mensaje.style.color = "red";
            mensaje.style.fontSize = "15px"
        } else {
            mensaje.textContent = "";
        }

    });
}

const nombre = document.getElementById("nombre");
const promocion = document.getElementById("promocion");
const email = document.getElementById("email");
const number = document.getElementById("number");


validarCampo(
    nombre, 
    /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/,
    "Este campo solo permite letras"
),

validarCampo(
    promocion,
    /^[0-9]*$/,
    "En este campo solo se permete números"
),

validarCampo(
    email,
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    "Escribe tu correo correctamente"
),

validarCampo(
    number,
    /^[0-9]*$/,
    "Este campo solo permite números "
)

//Validación de la opción email o Whastapp
const formulario = document.getElementById("formulario");
console.log(formulario.value);
formulario.addEventListener("submit", function boton(e){
    const medioContacto = document.getElementById("contactos");
    if(medioContacto.value === ""){
        alert("Seleccione un medio de contacto");
        e.preventDefault();
    }

});

const validarTodosCampos = document.getElementById("formulario");
validarTodosCampos.addEventListener("submit", function(event){
    const inputName = document.getElementById("nombre");
    const inputPromocion = document.getElementById("promocion");
    const inputEmail =  document.getElementById("email");
    const inputTelefono = document.getElementById("number");

    if( inputName.value === "" ||
        inputPromocion.value === "" ||
        inputEmail.value === "" ||
        inputTelefono.value === ""
    ){
        event.preventDefault();
        alert("Por favor llene los campos")
    }
})