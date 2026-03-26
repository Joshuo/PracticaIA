function saludar(){

    let nombre=
    document.getElementById("nombre").value; 
    let mensaje = document.getElementById("mensaje");

    if (nombre === ""){
        mensaje.textContent="Por favor, escribe tu nombre";

    }else{

        mensaje.textContent="Hola, "+ nombre + " :3";

    }

}