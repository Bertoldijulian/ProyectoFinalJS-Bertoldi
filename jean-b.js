const jeansYbermudas = [
    {id: 1, marca: "Jean U/N", precio: 4000, talles: "Talles en S, M, L, XL", descripcion: "jean azul oscuro con roturas y 2 cierres en los bolsillos", img: "./images/products/jean1.jpg"},
    {id: 2, marca: "Jean U/N", precio: 4000, talles: "Talles en S, M, L, XL", descripcion: "jean negro con roturas en la parte de las rodillas", img: "./images/products/jean2.jpg"},
    {id: 3, marca: "Jean M/E", precio: 3600, talles: "Talles en S, M, L, XL", descripcion: "jean azul clarito con desgastasdo en las rodillas", img: "./images/products/jean3.jpg"},
    {id: 4, marca: "Jean M/E", precio: 3800, talles: "Talles en S, M, L, XL", descripcion: "jean negro con roturas en las rodillas y por encima", img: "./images/products/jean4.jpg"},
    {id: 5, marca: "Jean M/E", precio: 3600, talles: "Talles en S, M, L, XL", descripcion: "jean azul claro con roturas y desgastes", img: "./images/products/jean5.jpg"},
    {id: 6, marca: "Jean U/N", precio: 3800, talles: "Talles en S, M, L, XL", descripcion: "jean azul oscuro en degrade con roturas en las rodillas", img: "./images/products/jean6.jpg"},
    {id: 7, marca: "Jean U/N", precio: 4000, talles: "Talles en S, M, L, XL", descripcion: "jean negro en degrade con roturas en las rodillas", img: "./images/products/jean7.jpg"},
    {id: 8, marca: "Jean U/N", precio: 38500, talles: "Talles en S, M, L, XL", descripcion: "jean azul clarito con roturas en todo el frente", img: "./images/products/jean8.jpg"},
    {id: 9, marca: "Jean M/E", precio: 3600, talles: "Talles en S, M, L, XL", descripcion: "jean azul clasico liso", img: "./images/products/jean9.jpg"},
    {id: 10, marca: "Jean M/E", precio: 3800, talles: "Talles en S, M, L, XL", descripcion: "jean gris oscuro y claro con roturas y escrituras", img: "./images/products/jean10.jpg"},
    {id: 11, marca: "Bermuda U/N", precio: 4200, talles: "Talles en S, M, L, XL", descripcion: "bermuda jean con roturas negras", img: "./images/products/bermuda1.jpg"},
    {id: 12, marca: "Bermuda U/N", precio: 4200, talles: "Talles en S, M, L, XL", descripcion: "bermuda jean con roturas", img: "./images/products/bermuda2.jpg"},
    {id: 13, marca: "Bermuda U/N", precio: 4500, talles: "Talles en S, M, L, XL", descripcion: "bermuda jean azul claro apenas con desgastes", img: "./images/products/bermuda3.jpg"},
    {id: 14, marca: "Bermuda M/E", precio: 3900, talles: "Talles en S, M, L, XL", descripcion: "bermuda jean azul en degrade con roturas", img: "./images/products/bermuda4.jpg"},
    {id: 15, marca: "Bermuda M/E", precio: 3900, talles: "Talles en S, M, L, XL", descripcion: "bermuda jean azul claro liso", img: "./images/products/bermuda5.jpg"},
    {id: 16, marca: "Bermuda M/E", precio: 3900, talles: "Talles en S, M, L, XL", descripcion: "bermuda jean azul clasico con desgastes", img: "./images/products/bermuda6.jpg"}
] 

let jybDiv = document.getElementById(`jybDiv`)

jeansYbermudas.forEach((jyb, indice) => {
    jybDiv.innerHTML += `
            <div class="carts">
                <div>
                    <img src="${jyb.img}" alt="">
                    <p><span>${jyb.precio}</span>$</p>
                </div>
                <p class="title">${jyb.marca}</p>
                <a href="" data-id="${jyb.id}" class="btn-add-cart">Comprar</a>
            </div>
    `
})