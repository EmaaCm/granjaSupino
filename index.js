lista_productos=[];


function agregar_producto(){
    nombre=prompt("Ingrese el nombre del nuevo producto");
    marca=prompt("Ingrese la marca del producto");
    precio=prompt("Ingrese el costo del producto");
    stock=prompt("Ingrese la cantidad actual que hay del nuevo producto");

//este const, crea un objeto con la plantilla que tomo de la clase
    const producto= new productos(nombre,marca,precio,stock);
//Esto hace un push en el arreglo de productos, introduciendo el objeto "producto que creamos anteriormente"
    lista_productos.push(producto)
}

//Esto es una plantilla de objetos
class productos{
    constructor (nombre, marca,precio,stock){
        this.nombre= nombre;
        this.marca= marca;
        this.precio= precio;
        this.stock= stock;
    }


get_datos(){

    console.log("Los datos del producto son los siguientes: ");
    console.log("Nombre: ", this.nombre);
    console.log("Marca: ", this.marca);
    console.log("Precio: $" , this.precio);
    console.log("");
}

get_stock(){
    if (this.stock>0){
        console.log("Hay stock del producto requerido");
    }
    else{
        console.log("Lo sentimos, no hay stock disponible")
    }

}
}



function precio_parcial(producto,cantidad){

    if(producto =="pollo"){
        if (cantidad<=3){
            let precio= cantidad * 1100;
            return precio;
        }
        else if (cantidad>3){
            let precio = cantidad * 900;
            return precio;
        }
    }

    else if(producto =="cerdo"){
        if (cantidad<=3){
            let precio= cantidad * 1500;
            return precio;
        }
        else if (cantidad>3){
            let precio = cantidad * 1300;
            return precio;
        }
    }
    
}

function total_descuento( precio_total,metodo_pago){

    
    if(metodo_pago =="debito"){
        let descuento = precio_total * 0.10;
        precio_total= precio_total - descuento;
        return precio_total;
    }
}

let lista_usuarios = [
    {nombre:"ema" , apellido:"casero"},
    {nombre: "pepe", apellido:"lopez"},
    {nombre:"juan", apellido:"quiroga"} , 
    {nombre:"alberto" , apellido:"mendez"} , 
    {nombre:"rodrigo" ,  apellido: "bueno"}
];

let acceso = prompt("Ingrese si es admin del sistema o cliente");
if(acceso=="admin"){
    console.log("Bienvenido al sistema, por favor ingrese nombre de usuario")
    let intentos = 0;
//aca voy a tratar de encontrar el nombre de usuario en nuestro arreglo
    let user=prompt("ingrese nombre de usuario");
    for(let i=0;i<lista_usuarios.length; i++){

        if (user ==lista_usuarios[i].nombre){
            alert("Bienvienido al sistema");
            let bandera=prompt("desea agregar algun producto?")
            while(bandera=="si"){
            agregar_producto();
            bandera=prompt("desea agregar algun producto mas?")
                }
            break;
        }
        else if (user != lista_usuarios[i].nombre && intentos<3){
            console.log("Nombre de usuario invalido");
            intentos= intentos + 1;
            user=prompt("ingrese nombre de usuario nuevamente");
            continue;
        }
        
        else if(intentos==3){
            alert("comunicarse con el gerente regional");
        }
    }
}

else if (acceso=="cliente"){
let edad= parseInt(prompt("Ingrese su edad"));


while(edad <= 17){
    console.log("La compra solo esta permitida en mayores de edad");
    alert ("Solo se permite la compra en usuarios mayores a  18 años");
    edad = parseInt(prompt("Ingresar nuevamente la edad"));
    if(edad<=17 ){
        console.log("La compra solo esta permitida en mayores de edad");
        alert ("Solo se permite la compra en usuarios mayores a  18 años");
        continue
    }
    else if(edad>=18){
        console.log("Edad permitida");
        alert ("Prosigamos con la compra");
        break
    }
}
let producto =  prompt("Ingrese el producto que deseé comprar: Pollo o Cerdo ");
let cantidad = prompt ("ingrese la cantidad que desee comprar expresada en numeros");


let precio_total= precio_parcial(producto, cantidad);
console.log("su total es de $" , precio_total );


let metodo_pago = prompt( "¿desea abonar en debito o credito?");

if(metodo_pago=="debito"){

    let precio_final= total_descuento( precio_total,metodo_pago);

    console.log( "su precio final con descuento es de $",precio_final);
    alert( "su precio final con descuento es de $",precio_final);
}

else if(metodo_pago!="debito"){
    alert("metodo de pago invalido");
}



if (acceso!="cliente" || acceso !="admin"){
    alert("Por favor recargue la pagina e ingrese un perfil valido");
}
}