//Evento Submit
$( "#formulario" ).submit(function( event ) {
    alert( "Formulario Enviado");
    event.preventDefault();
  });

//Click
$( "#calculadoraBtn" ).click(function() {
    alert( "Disponible a partir del 7/11/21" );
  });


const inputNombre = formulario.nombreUsuario;
const inputEmail = formulario.correoUsuario;


inputNombre.addEventListener("focus", () => 
    console.log("El usuario esta en el campo Nombre")
);

inputEmail.addEventListener("focus", () => 
    console.log("El usuario esta en el campo Email")
);

const inputCheckbox = formulario.terminosCondiciones;
inputCheckbox.addEventListener("change", (e) => {
    if(e.target.checked == true){
        console.log("El usuario acepta terminos y condiciones");
    }else{
        console.log("El usuario NO acepta los terminos y condiciones");
    }
});