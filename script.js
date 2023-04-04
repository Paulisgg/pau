var lugar = "Paris "
var sitio = "Francia"
var x = 10
var y = 5
var z = "4"
var botonzote = document.getElementById("boton1")

botonzote.addEventListener("click", _=>{
   RestarNumeros(x, y)
})
 

function RestarNumeros (numero1, numero2)
{
  alert(numero1 - numero2)
}

//RestarNumeros (x, y) 
