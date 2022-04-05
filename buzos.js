let buzosDiv = document.getElementById(`buzosDiv`)

async function buzoProductos() {
    const response = await fetch(`./json/buzos.json`)
    return await response.json()
}


buzoProductos().then(abrigo => {
     abrigo.forEach((buzo) => {
         buzosDiv.innerHTML += `
            <div class="carts" id="${buzo.id}">
                <div>
                    <img src="./images/products/${buzo.img}" alt="">
                    <p><span>${buzo.precio}</span>$</p>
                </div>
                <p class="title">${buzo.marca}</p>
                <a href="" data-id="${buzo.id}" class="btn-add-cart">Comprar</a>
            </div> 
         `
})})