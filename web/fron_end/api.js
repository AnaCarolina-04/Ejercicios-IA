function consumoAPI(){
    name = document.getElementById("Nombre").value;

    last_name = document.getElementById("Apellido").value;
    
    age = document.getElementById("Edad").value;

    fetch("http://localhost:5000/enviar_datos",{
    method: 'POST',

    });
}