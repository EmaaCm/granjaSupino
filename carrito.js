


//funcion que va generando un Modal con todos los elemnetos que vamos agregando al carrito
let pintarCarrito = ()=>{
    modal_div.innerHTML="";
    modal_div.style.display ="flex";

let modal_header= document.createElement("div");
modal_header.className="modal_head";
modal_header.innerHTML=` <h1 class="modal_header_title">Carrito</h1>
`;
modal_div.append(modal_header);

let modal_btn = document.createElement("h1");
modal_btn.innerText ="X";
modal_btn.className="btn_modal";
modal_header.append(modal_btn);

modal_btn.addEventListener ("click", ()=>{
    modal_div.style.display ="none";
    })

//Busca cada elemento que hay en el carrito y le da formato dentro del modal
carrito.forEach((elemento)=> {
let modal_body= document.createElement("div");
modal_body.className="modal_body";
modal_body.innerHTML=`
<img src="${elemento.img}">
<h3> ${elemento.nombre}</h3>
<p class="price"> $${elemento.precio}</p>
<p class="cant">Kg:${elemento.cantidad}</p>
<P class="cant"> Sub-Total: ${elemento.precio*elemento.cantidad}</p>

`
modal_div.append(modal_body);


//Crea el boton de eliminar para los elementos del carrito
let eliminar = document.createElement("span");
eliminar.className= "eliminar-producto";
eliminar.innerText="❌";
modal_body.append(eliminar);

eliminar.addEventListener("click" , eliminarProducto)


})
//Totaliza el la suma de los productos que hay en el carrito
let total= carrito.reduce((acc, item) => acc + item.precio*item.cantidad, 0 )

let modal_foot= document.createElement("div");
modal_foot.className="modal_total";
modal_foot.innerHTML=` total a pagar: $${total}
`
modal_div.append(modal_foot);


};

ver_carrito.addEventListener("click", pintarCarrito)



//se crea una funcion que busca(find) el id del elemento del btn eliminar(filter) y lo saca del carrito(pintarCarrito)
let eliminarProducto = () =>{
    let busquedaId = carrito.find((elemento) => elemento.id);

    carrito = carrito.filter((carritoId) =>{
        return carritoId !== busquedaId;
    })

pintarCarrito();
contadorCarrito();
};



//vamos a configurar el contador debajo del carrito

let contadorCarrito = () =>{
    cantidadCarrito.style.display ="block"
    cantidadCarrito.innerText= carrito.length
    } 