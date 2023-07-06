/*
let registrarse= document.createElement("button");
registrarse.innerText="Registrarse";
registrarse.className="btn_registro";
div_registro.append(registrarse);
 registrarse.addEventListener("click" , ()=>{

    nombre=prompt("Ingresar nombre");
    apellido=prompt("ingresar apellido");
    mail=prompt("Ingrese el mail de inicio de sesion");

    //este const, crea un objeto con la plantilla que tomo de la clase
    let cliente_nuevo= new cliente(nombre,apellido,mail);
    //Esto hace un push en el arreglo de productos, introduciendo el objeto "producto que creamos anteriormente"
    clientes.push(cliente_nuevo);

    console.log(clientes);



    let clientes_JSON= JSON.stringify(clientes);
    console.log(clientes_JSON);

    localStorage.setItem("arr_clientes", clientes_JSON)

 })
*/



/////////////////////////////////////////////////////



// let btn_comprar = document.getElementById("btn_comprar");

// btn_comprar.addEventListener("click", agregar_carrito);








/*

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
*/