const productos = [
    {nombre: "harina", precio: 1000 },
    {nombre: "galletitas", precio:2000 },
    {nombre: "cerveza", precio:3000 },
    {nombre: "leche", precio: 1500 },
    {nombre: "yerba", precio: 1800 },
    {nombre: "gaseosas", precio: 2300 },
];

let carrito = []

let seleccion = prompt("hola desea comprar algun producto si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor intrese si o no")
    seleccion = prompt("hola desea comprar algun producto si o no")
}

if(seleccion == "si"){
    alert("a continuacion nuentra lista de productos")
    let todoslosProductos = productos.map(
        (productos) => productos.nombre + " " + productos.precio + "$"
    );
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no") {
    alert("gracias por su visita")
}

while(seleccion != "no"){
    let productos = prompt("agrega un producto a tu carrito")
    let precio = 0

    if(productos == "harina" || productos == "galletitas" || productos == "cerveza" || productos == "leche" || productos == "yerba" || productos == "gaseosas"){
        switch(productos){
            case "harina":
                precio = 1000
                break;
            case "galletitas":
                precio = 2000
                break;
            case "cerveza":
                precio = 3000
                break;
            case "leche":
                precio = 1500
                break;
            case "yerba":
                precio = 1800
                break;
            case "gaseosas":
                precio = 2300
                break;
                default:
                break;
        }
        let unidades = parseInt(prompt("cuantas unidades quieres llevar"))
        carrito.push({productos, unidades, precio})
        console.log(carrito)
    } else {
        alert("el producto no existe")
    }

    seleccion = prompt("desea agregar otro producto a tu carrito si o no")

    while(seleccion === "no"){
        alert("gracias por su visita")
        carrito.forEach ((carritoFinal) =>{
            console.log(`Producto: ${carritoFinal.productos}, Unidades: ${carritoFinal.unidades}, Precio: ${carritoFinal.unidades * carritoFinal.precio }`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`El total a pagar por su compra es: ${total}`);
