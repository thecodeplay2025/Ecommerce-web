let category_nav_list=document.querySelector(".category_nav_list");
function open_categ_list(){
    category_nav_list.classList.toggle("active");
}

let nav_links=document.querySelector(".nav_links")
function open_menu() {
    nav_links.classList.toggle("activ");
}





var cart=document.querySelector('.cart');
function opep_close_cart() {
    cart.classList.toggle("active");
}
fetch('products.json')
.then(response => response.json())
.then(data => {

    const addToCartButtons=document.querySelectorAll(".btn_add_cart");
    addToCartButtons.forEach(button =>{
        button.addEventListener("click",(event) =>{
            const productId= event.target.getAttribute('data-id')
            const selcetedProduct= data.find(product => product.id == productId)


            addToCart(selcetedProduct)


            const allMatchingBottons=document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)
            allMatchingBottons.forEach(btn =>{
                btn.classList.add("active")
                btn.innerHTML=`<i class="fa-solid fa-cart-shopping"></i>item in cart`
            })
        })
       
    })
})



function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push({... product , quantity:1})
    localStorage.setItem('cart',JSON.stringify(cart))
    updateCart()
}


function updateCart() {
    const cartItemsConta=document.getElementById("cart_items");
    const cart= JSON.parse(localStorage.getItem('cart')) || []
    var total_product=0
    var total_price=0
    cartItemsConta.innerHTML=""
    cart.forEach((item , index) => {
        total_product+=item.quantity
        total_price +=(item.price)*(item.quantity)
        cartItemsConta.innerHTML += `
          <div class="item_cart">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price_cart">$${(item.price)*(item.quantity)}</p>
                    <div class="quantity_control">
                        <button class="decrease_quantity" data-inex="${index}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase_quantity" data-inex="${index}">+</button>
                    </div>
                </div>
                <button class="delet_item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `
    })
    const price_cart_total=document.querySelector(".price_cart_total")
    const Count_item_cart=document.querySelector(".Count_item_cart")
    const count_item_header=document.querySelector(".count_item_header")
    price_cart_total.innerHTML = total_price 
    Count_item_cart.innerHTML=total_product
    count_item_header.innerHTML=total_product
// زيادة وتقليل كمية المنتجات
    const decreaseButton=document.querySelectorAll('.decrease_quantity')
    const increaseButton =document.querySelectorAll('.increase_quantity')

    decreaseButton.forEach(button => {
        button.addEventListener('click' , (event) =>{
            const itemIndex=event.target.closest('button').getAttribute('data-inex')
            decreaseQuantity(itemIndex)
        })
    })
    
    increaseButton.forEach(button => {
        button.addEventListener('click' , (event) =>{
            const itemIndex=event.target.closest('button').getAttribute('data-inex')
            increaseQuantity(itemIndex)
        })
    })
    // 


// حدف المنتج
    const delteButtons = document.querySelectorAll('.delet_item')
    delteButtons.forEach(button => {
        button.addEventListener('click' , (event) =>{
            const itemIndex = event.target.closest('button').getAttribute ('data-index')
            removeFromCart(itemIndex)

        })
    }) 
    //
}



// دالة الحدف
function removeFromCart(index){
    const cart= JSON.parse(localStorage.getItem('cart')) || []
    const removeProduct = cart.splice(index , 1)[0]
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart()
    updateButtonsState(removeProduct.id)
}
// 



// دالة الزيادة والنقصان
function decreaseQuantity(index){
    let cart= JSON.parse(localStorage.getItem('cart')) || []
    if (cart[index].quantity >1) {
        cart[index].quantity -=1
        localStorage.setItem('cart', JSON.stringify(cart))
        updateCart()
    }
   
}
function increaseQuantity(index){
    let cart= JSON.parse(localStorage.getItem('cart')) || []
    cart[index].quantity +=1
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCart()
    
   
}
// 



function updateButtonsState(productId) {
    const allMatchingBottons =document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)
    allMatchingBottons.forEach(button =>{
        button.classList.remove('active');
        button.innerHTML=  `<i class="fa-solid fa-cart-shopping"></i>add to cart`
    })
}





updateCart()