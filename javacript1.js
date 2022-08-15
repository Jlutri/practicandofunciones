/*
function mayorQue (n) {
    return (m) => m > n

}

let mayorQueDiez = mayorQue (10)

console.log(mayorQueDiez (12) ) // true
console.log(mayorQueDiez (8) ) // false

function asignarOperacion(op) {
    if (op == "sumar"){
        return (a, b) => a + b
    }else if (op == "restar"){
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")*/
/* para la multiplicacion de funciones
const duplicado = []
porCadaUno (numeros, (el)=> {
    duplicado.push(el * 2)
})
console.log(duplicado)*/
/*
const miCompra = [
    {nombre: 'parrilla movil', precio: 15000},
    {nombre: 'mesa movil', precio: 10000},
    {nombre: 'silla de quebracho', precio: 8000},
]
const total = miCompra.reduce((acc, el) => acc + el.precio, 0)
console.log (total)*/
// ejercicio de practica
class Woods {
    /**
    @param {*} modelo
    @param {*} numero
    @param {*} precio
    */
    constructor (modelo,numero,precio){
        this.modelo = modelo;
        this.precio = precio;
        this.id = -1; 

    }
    mostrar_descripcion(){
        return (this.id + "-" + this.modelo + "-" + this.numero + "$" + this.precio);

    }
    set_id(nuevo_id){
        this.id = nuevo_id;
    }
}
let arreglo_woods = new Array() ;
let mueble1 = new Woods ("Parrilla","uno",15000);
mueble1.set_id(1);
let mueble2 = new Woods ("Mesa movil","dos",10000);
mueble2.set_id(2);
let mueble3 = new Woods ("mueble de quebracho","tres",8000);
mueble3.set_id(3);

arreglo_woods.push(mueble1);
arreglo_woods.push(mueble2);
arreglo_woods.push(mueble3);

const ahora = new Date();
alert ("Bienvenid@ a la tienda de anthony woods" +ahora.toLocaleDateString());

let flag = true;
while(flag) {

    let mensaje = "indique lo que desea hacer: ";
    mensaje += "\n1) Cargar nuevo producto ";
    mensaje += "\n2) eliminar producto ";
    mensaje += "\n3) mostrar productos con stock";
    mensaje += "\n4) aplicar descuento";
    mensaje += "\n5) volver al menu";

    let respuesta = prompt(mensaje);

    switch(respuesta){
        case "1" :
            cargar_nuevo_producto ();
            break;
        case "2" :
            eliminar_producto ();
            break;
        case "3" :
            mostrar_productos_con_stock();
            break;
        case "4":
            aplicar_descuento();
            break;
        case "5":
            voler_al_menu();
            flag=false;
            break;
        case null : 
            alert("gracias por utilizar nuestra pagina");
            flag=false;
            break;
        default :
            alert("no ingreso una opcion valida");


    }


}

function solicitar_datos_woods(){
    let check = true;

    while (check){
        let msj = "";
        let modelo= prompt("ingrese modelo"). trim();
        let numero=prompt("ingrese el numero del producto").trim();
        let precio=parseFloat(prompt("ingrese el precio del producto seleccionado"));

            if (!modelo){
            
            msj += "\n debe ingresar el modelo";
        }
            if(!numero){
                msj += "\n debe ingresar el numero del producto"
            }

            if(isNaN(!precio)){
                msj +="\n debe ingresar el precio del producto"
            }
            if(msj != ""){
                alert(msj)
                check = confirm("desea cargar de nuevo los datos");

            }else {
                return new Woods (modelo,numero,precio);
            }
        }

        return false;


}

function cargar_nuevo_producto(){
    let woods = solicitar_datos_woods() ;
    if (woods) {
        woods.set_id(gen_id);
        gen_id++;
        arreglo_woods.push(woods);
        alert("producto agregado con exito");
    }
}
