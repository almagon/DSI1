
let productos = [[0, "G A L L E T A S", 9],
				 [1, "L E C H E", 20],
				 [2, "N I T O", 12],
				 [3, "M A Z A P A N", 7],
				 [4, "H A L L S ", 10]];
let carrito = [];

window.addEventListener("load", cargar);

function cargar(){
	s = document.querySelector('section');
	for(i = 0; i < productos.length; i++)
	{
		document.querySelector('section').innerHTML += "<div id='"+ 
		productos[i][0]+"'>" + 
		"<h1>" + productos[i][1] + "</h1>" +
		"<p>$" + productos[i][2] + "</p>" +
		"<button onclick = 'agregar("+productos[i][0]+")'>+</button>" + 
		"</div>"; 
	}
}

function agregar(id){
	carrito.push(id);
	document.querySSelector('s').innerHTML = carrito.length;
}

function mostrarCarrito(){
	let listaProductos = "";
	for(i = 0; i < carrito.length; i++){
		for(y = 0; y < productos.length; y++){
			if(productos[y][0] == carrito[i]){
				listaProductos += "-" + productos[y][1] + "     $" + productos[y][2] + "\n";

			}
		}
	}
	alert("Carrito de compras: \n" + listaProductos);
}

function visibilidad(){
	mostrarCarrito();
}