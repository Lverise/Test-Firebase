import { agregarProducto } from "./promesas.js";
addEventListener("load",()=>{
    document.getElementById("btnAgregar").addEventListener("click",agregar);
})


function agregar(){
    let eTipo = document.getElementById("tipoProducto");
    let eColor = document.getElementById("colorProducto");
    let vTipo = eTipo.value
    let vColor = eColor.value
    let objeto = {tipo:vTipo,color:vColor}
    
    agregarProducto(objeto).then(()=>{
        alert("Se agregó el producto")
    }).catch((error)=>{
        console.log(error)
    })
}