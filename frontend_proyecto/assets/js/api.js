function consumoApi(){
   /*var datos = document.getElementsByClassName('form-select');  
   alert(datos.length); //
   for (let i = 0; i < datos.length; i++) {
    alert(datos[i].textContent); */

    var datos= [];
    var claves= ["edad", "genero", "hipertenso","corazon", "casado", "trabajo","residencia", "glucosa", "imc", "fumador"];
    var body={};
    for (var i = 1; i <= 10; i++) {
        var dato = document.getElementById(i);
        datos.push(dato.value);

    }

    for (var i = 0; i < claves.length; i++) {
        body =[claves[i]] = datos[i];
    }
    
    alert(body);
    fetch('http://127.0.0.1:5000/prediccion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data =>{
            alert('prediction'+ data.prediction)
        })
        .catch((error) =>{
            console.error('Error',error);
        });
}