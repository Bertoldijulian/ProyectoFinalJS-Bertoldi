const gorras = [
    {id: 1, marca: "LA", precio: 2500, descrpcion:"gorra bodo claro con viscera plana", img: "./images/products/gorra1.jpg"},
    {id: 2, marca: "LA", precio: 2500, descrpcion:"gorra azul con viscera plana", img: "./images/products/gorra2.jpg"},
    {id: 3, marca: "NY", precio: 2200, descrpcion:"gorra beige claro con viscera normal", img: "./images/products/gorra3.jpg"},
    {id: 4, marca: "NY", precio: 2200, descrpcion:"gorra roja con viscera normal", img: "./images/products/gorra4.jpg"},
    {id: 5, marca: "U/N", precio: 2500, descrpcion:"gorra camuflada con viscera normal", img: "./images/products/gorra5.jpg"},
    {id: 6, marca: "NY", precio: 2500, descrpcion:"gorra gris con viscera plana y malla", img: "./images/products/gorra6.jpg"},
    {id: 7, marca: "U/N", precio: 2500, descrpcion:"gorra tricolor con viscera normal y dibujo de ancla", img: "./images/products/gorra7.jpg"},
    {id: 8, marca: "U/N", precio: 2500, descrpcion:"gorra gris con viscera normal y escritura", img: "./images/products/gorra8.jpg"},
    {id: 9, marca: "U/N", precio: 2500, descrpcion:"gorra verde y blanca con viscera normal y malla", img: "./images/products/gorra9.jpg"},
    {id: 10, marca: "M/E", precio: 2300, descrpcion:"gorra blanca con malla y viscera normal", img: "./images/products/gorra10.jpg"},
    {id: 11, marca: "M/E", precio: 2300, descrpcion:"gorra gris con viscera plana y logo de una mano", img: "./images/products/gorra11.jpg"},
    {id: 12, marca: "M/E", precio: 2300, descrpcion:"gorra verde militar con viscera normal y malla", img: "./images/products/gorra12.jpg"}
]

let gorrasDiv = document.getElementById(`gorrasDiv`)

gorras.forEach((gorra, indice) => {
    gorrasDiv.innerHTML += `
            <div class="carts">
                <div>
                    <img src="${gorra.img}" alt="">
                    <p><span>${gorra.precio}</span>$</p>
                </div>
                <p class="title">Gorra ${gorra.marca}</p>
                <a href="" data-id="${gorra.id}" class="btn-add-cart">Comprar</a>
            </div>
    `
})