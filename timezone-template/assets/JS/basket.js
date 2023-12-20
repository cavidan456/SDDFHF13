const product = document.getElementById("product")


function getBasket() {
    product.innerHTML = " "
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.map((item , index)=>{
        const box = document.createElement("div");
        box.className ="col-12 col-md-4 col-lg-4 col-xl-4";
        box.innerHTML = `<img src="${item.image}" alt="">
                <p>${item.title}</p>
                <p>${item.price} TL</p>
                <button  class="btn btn-danger" onclick="deleyt(${index})">delete</button>
            `;
        product.appendChild(box);
    })
}

getBasket()

function deleyt(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(index , 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    getBasket()
}