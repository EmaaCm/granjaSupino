
// getElementById
let titulo = document.getElementById("titulo_principal");

console.log(titulo);
console.log( titulo.innerText );

titulo.innerText = "Titulo generado desde JS";


// getElementsByClassName

let parrafos = document.getElementsByClassName("parrafo");

console.log( parrafos );
console.log( parrafos[0]);
console.log( parrafos[1]);
console.log( parrafos[1].innerText);

// getElementsByTagName


let li = document.getElementsByTagName("li");

console.log( li );

for( let elemento of li ){

    console.log(elemento);
    console.log(elemento.innerText);
}



let contenedor = document.getElementById("contenedor");


/*
contenedor.innerHTML = "<p>Parrafo generado desde JS</p>";
contenedor.innerHTML = "<p>OTRO PARRAFO GENERADO DESDE JS</p>";
*/


// createElement

let parrafo_js = document.createElement("p");

parrafo_js.innerText = "Parrafo creado 100% en JS";
parrafo_js.className = "parrafo_rojo";

parrafo_js.style.textAlign = "center";
parrafo_js.style.fontFamily = "Verdana";

console.log(parrafo_js);


contenedor.append( parrafo_js );



/*--------------------------------------------------------------------------2DA pare */


//let nombre_usuario = document.getElementById("nombre_usuario");

//nombre_usuario.value = "Pepe desde JS";

//console.log("Bienvenido/a al sistema: ", nombre_usuario.value);



function saludar(){

    let nombre_usuario = document.getElementById("nombre_usuario");


    console.log("Bienvenido/a al sistema: ", nombre_usuario.value);
}



function validar(){

    let nombre_usuario = document.getElementById("nombre_usuario");
    let msj = document.getElementById("mensaje");


    if(nombre_usuario.value == "Pepe"){

        let parrafo = document.createElement("p");
        parrafo.innerText = "Bienvenido/a al sistema" + nombre_usuario.value;
        parrafo.style.fontSize = "24px";
        msj.append(parrafo);
    }
    else{

        document.body.innerHTML = `<h2>ERROR DE USUARIO</h2>
                                   <p>El usuario ${nombre_usuario.value} no se encontro</p>
                                   <a href="clase9b.html">Volver</a>`;
    }


}


obj1

obj2 = obj1