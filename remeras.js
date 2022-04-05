const remeras = [
    {id: 1, marca: "U/N", precio: 2500, talles: "Talles en S, M, L, XL", descripcion: "remera negra en el frente con estampa blanca y escritura", img: "./images/products/remera1.jpg", stock: 1},
    {id: 2, marca: "U/N", precio: 2500, talles: "Talles en S, M, L, XL", descripcion: "remera negra en el frente con una carita", img: "./images/products/remera2.jpg", stock: 1},
    {id: 3, marca: "M/E", precio: 2300, talles: "Talles en S, M, L, XL", descripcion: "remera rosada en el frente con escritura", img: "./images/products/remera3.jpg", stock: 1},
    {id: 4, marca: "M/E", precio: 2200, talles: "Talles en S, M, L, XL", descripcion: "remera azul y blanca con bolsillito", img: "./images/products/remera4.jpg", stock: 1},
    {id: 5, marca: "M/E", precio: 2300, talles: "Talles en S, M, L, XL", descripcion: "remera negra con lunas y letras", img: "./images/products/remera5.jpg", stock: 1},
    {id: 6, marca: "U/N", precio: 2500, talles: "Talles en S, M, L, XL", descripcion: "remera verde con escritura", img: "./images/products/remera6.jpg", stock: 1},
    {id: 7, marca: "M/E", precio: 2300, talles: "Talles en S, M, L, XL", descripcion: "remera amarilla con dibujo", img: "./images/products/remera7.jpg", stock: 1},
    {id: 8, marca: "M/E", precio: 2300, talles: "Talles en S, M, L, XL", descripcion: "remera blanca con escritura", img: "./images/products/remera8.jpg", stock: 1},
    {id: 9, marca: "U/N", precio: 2500, talles: "Talles en S, M, L, XL", descripcion: "remera amarillenta con imagen y escritura", img: "./images/products/remera9.jpg", stock: 1},
    {id: 10, marca: "U/N", precio: 2500, talles: "Talles en S, M, L, XL", descripcion: "remera blanca con imagenes a cuadritos", img: "./images/products/remera10.jpg", stock: 1},
    {id: 11, marca: "U/N", precio: 2500, talles: "Talles en S, M, L, XL", descripcion: "remera ladrillo con figuras blancas", img: "./images/products/remera11.jpg", stock: 1},
    {id: 12, marca: "M/E", precio: 2300, talles: "Talles en S, M, L, XL", descripcion: "remera grsi oscura con imagen y escritura", img: "./images/products/remera12.jpg", stock: 1},
    {id: 13, marca: "M/E", precio: 2300, talles: "Talles en S, M, L, XL", descripcion: "remera roja con lineas blancas", img: "./images/products/remera13.jpg", stock: 1},
    {id: 14, marca: "U/N", precio: 2500, talles: "Talles en S, M, L, XL", descripcion: "remera negra con escritura en blanco degrade", img: "./images/products/remera14.jpg", stock: 1},
    {id: 15, marca: "M/E", precio: 2300, talles: "Talles en S, M, L, XL", descripcion: "remera negra con una luna y escritura", img: "./images/products/remera15.jpg", stock: 1},
    {id: 16, marca: "M/E", precio: 2300, talles: "Talles en S, M, L, XL", descripcion: "remera amarillo-beige con escritura", img: "./images/products/remera16.jpg", stock: 1}
]


let remerasDiv = document.getElementById(`remerasDiv`)
remeras.forEach((remera, indice) => {
    remerasDiv.innerHTML += `
            <div class="carts">
                <div>
                    <img src="${remera.img}" alt="">
                    <p><span>${remera.precio}</span>$</p>
                </div>
                <p class="title">Remera ${remera.marca}</p>
                <a href="" data-id="${remera.id}" class="btn-add-cart">Comprar</a>
            </div>
    `
})