import { agregarProducto } from "./promesas.js";
addEventListener("load",()=>{
    document.getElementById("btnAgregar").addEventListener("click",agregar);
})


function agregar(){
    let eTipo = document.getElementById("tipoProducto");
    let eColor = document.getElementById("colorProducto");
    let eDescpacho = document.getElementById("tipoDespacho")
    let vTipo = eTipo.value
    let vColor = eColor.value
    let vDespacho = eDescpacho.value
    let objeto = {tipo:vTipo,color:vColor,despacho:vDespacho}
    
    agregarProducto(objeto).then(()=>{
        alert("Se agregó el producto")
    }).catch((error)=>{
        console.log(error)
    })
}