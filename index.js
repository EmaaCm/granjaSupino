let delete_element = document.getElementsByClassName("price_delete")
let modal_div= document.getElementById("modal_div")
let galeria= document.getElementById("galeria");
const ver_carrito = document.getElementById("ver_carrito");
let cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito= JSON.parse(localStorage.getItem("carritoCompra")) || [];
let clientes=[];


lista_productos.forEach((elemento) =>{
    let ventana=document.createElement("div");
        ventana.className="card"
        ventana.innerHTML= `
        <img src="${elemento.img}">
        <h3 class="nombre_prod"> ${elemento.nombre}</h3>
        <p class="precio"> $ ${elemento.precio}</p>
`;

galeria.append(ventana);

let comprar= document.createElement("button");
comprar.innerText="Comprar";
comprar.className="btn_comprar"
ventana.append(comprar);

comprar.addEventListener("click", ()=>{

    //usando el metodo Some puedo ver todo lo que hay en el carrito y si 2 ids o mas coinciden arrojan un "TRUE"
    let repetido = carrito.some((productoRepetido)=> productoRepetido.id === elemento.id);

//este if dice que si repetido  es true...
if(repetido){
    carrito.map((prod) =>{
        if (prod.id === elemento.id){
            prod.cantidad++
        }
    })
}

else{
    carrito.push({
        id: elemento.id,
        nombre: elemento.nombre,
        precio: elemento.precio,
        cantidad: elemento.cantidad,
        img: elemento.img

        });
    }
    contadorCarrito();
    carritoSave ();
})
});


class cliente{
    constructor (nombre, apellido,mail){
        this.nombre=nombre;
        this.apellido= apellido;
        this.mail= mail;
    }
}



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
    constructor (id,nombre, marca,precio,stock,img){
        this.id=id;
        this.nombre= nombre;
        this.marca= marca;
        this.precio= precio;
        this.stock= stock;
        this.img= img;
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
