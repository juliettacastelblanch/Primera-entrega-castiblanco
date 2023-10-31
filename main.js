// const btnCart = document.querySelector('.container-icon')
// const containerCartProducts = document.querySelector('.container-cart-products')

// btnCart.addEventListener('click', () => {
   //  containerCartProducts.classList.toggle('hidden-cart')
// })


let precios = [];


for (let i = 1; i <= 3; i++) {
  let precio = parseFloat(prompt(`Ingrese el precio ${i}:`));
  precios.push(precio);
}

const calcularPrecioConIVA = (precio) => precio * 1.21;

console.log("Precios con IVA:");
precios.map((precio) => console.log(calcularPrecioConIVA(precio)));


const sumaTotalSinIVA = precios.reduce((acumulador, precio) => acumulador + precio, 0);


const sumaTotalConIVA = precios.map(calcularPrecioConIVA).reduce((acumulador, precioConIVA) => acumulador + precioConIVA, 0);

console.log("Suma total sin IVA:", sumaTotalSinIVA);
console.log("Suma total con IVA:", sumaTotalConIVA);