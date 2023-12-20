const product = document.getElementById("product");
const productSearch = document.getElementById("product-search");
const searchInp = document.getElementById("search-inp");
const searchBtn = document.getElementById("search-btn");
const moreBtn = document.getElementById("load-more");
const qutusort = document.getElementById("proSort")

let page = 1
let limit = 6

async function getProduct() {
    productSearch.style.display = "none";
    let skip = (page - 1) * limit;
    const response = await axios.get(`https://655dd2b79f1e1093c599f093.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
    const data = response.data;
    db = data
    db.forEach(item => {
        const box = document.createElement('div');
        box.className = 'col-12 col-md-4 col-lg-4 col-xl-4';
        box.innerHTML = `<img src="${item.image}" alt="">
                <p>${item.title}</p>
                <p>${item.price} TL</p>
                <button  class="btn btn-primary" onclick="addToBasket(${item.id})">add to basket</button>
            `;
        product.appendChild(box);
    });
    page++;
}
getProduct()

function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(db.find((item)=> item.id == id))
    localStorage.setItem("cart", JSON.stringify(cart))
}

moreBtn.addEventListener("click" , getProduct)

//search name

function searchName() {
    productSearch.innerHTML = " "
    product.style.display = "none"
    productSearch.style.display = "flex"
    axios.get(`https://655dd2b79f1e1093c599f093.mockapi.io/products?title=${searchInp.value}`)
    .then((res)=>{
        db = res.data
        db.forEach(item =>{
            let box2 = document.createElement("div")
            box2.className = "col-4"
            box2.innerHTML = `<img src="${item.image}" alt="">
            <p>${item.title}</p>
            <p>${item.price} TL</p>
            `;
            productSearch.appendChild(box2)
        })
    })
}

searchBtn.addEventListener("click", searchName)



function siralama() {
    product.innerHTML =' '
    axios.get("https://655dd2b79f1e1093c599f093.mockapi.io/products")
    .then((res)=>{
        db = res.data
        let databaza = db.sort((item,items)=>item.price - items.price)
        console.log(databaza);
        databaza.forEach(item =>{
        const box3 = document.createElement('div');
        box3.className = 'col-12 col-md-4 col-lg-4 col-xl-4';
        box3.innerHTML = `<img src="${item.image}" alt="">
                <p>${item.title}</p>
                <p>${item.price} TL</p>
                <button  class="btn btn-primary" onclick="addToBasket(${item.id})">add to basket</button>
            `;
            qutusort.appendChild(box3)
        })
    })
}
const sira =document.getElementById("sira")

sira.addEventListener("click" , siralama)