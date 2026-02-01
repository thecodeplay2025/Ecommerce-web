fetch('products.json')
.then(response => response.json())
.then(data => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    const swiper_items_sale=document.getElementById("swiper_items_sale");
    const swiper_elrctronic=document.getElementById("swiper_elrctronic");
    const swiper_appliances=document.getElementById("swiper_appliances");
    const swiper_Phones=document.getElementById("swiper_Phones");

    data.forEach(product=> {
    if (product.old_price) {
        // حساب الخصم
        // (Math.floor)التقريب الى اقرب رقم
        // الخصم = السعر القديم*100 /( السعر القديم -السعرالجديد )
        const isInCart = cart.some(cartItem => cartItem.id === product.id)
        const discount=Math.floor((product.old_price - product.price) / product.old_price * 100)
        swiper_items_sale.innerHTML += `
        <div class="swiper-slide product">
                        <span class="sale_product">${discount}%</span>
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product"><a href="#">${product.name}</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''} " data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>


        </div>
       `
    }
});
    data.forEach(product=> {
        const isInCart = cart.some(cartItem => cartItem.id === product.id)
        if (product.catetory == "electronics") {
            const old_price_paragraf=product.old_price ? `<p class="old_price">$${product.old_price}</p>` : ""
       const sale_product_parsent=product.old_price ?`<span class="sale_product">${(Math.floor((product.old_price - product.price) / product.old_price * 100))}%</span>` : ""
       swiper_elrctronic.innerHTML += `
        <div class="swiper-slide product">
                        ${sale_product_parsent}
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product"><a href="#">${product.name}</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_paragraf}

                        </div>
                        <div class="icons">
                           <span class="btn_add_cart ${isInCart ? 'active' : ''} " data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>


        </div>
       `
            
        }
       
});
    data.forEach(product=> {
         const isInCart = cart.some(cartItem => cartItem.id === product.id)
        if (product.catetory == "appliances") {
            const old_price_paragraf=product.old_price ? `<p class="old_price">$${product.old_price}</p>` : ""
            const sale_product_parsent=product.old_price ?`<span class="sale_product">${(Math.floor((product.old_price - product.price) / product.old_price * 100))}%</span>` : ""
            swiper_appliances.innerHTML += `
                <div class="swiper-slide product">
                                ${sale_product_parsent}
                                <div class="img_product">
                                    <a href="#"><img src="${product.img}" alt=""></a>
                                </div>
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="name_product"><a href="#">${product.name}</a></p>
                                <div class="price">
                                    <p><span>$${product.price}</span></p>
                                    ${old_price_paragraf}

                                </div>
                                <div class="icons">
                                    <span class="btn_add_cart ${isInCart ? 'active' : ''} " data-id="${product.id}">
                                      <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'item in cart' : 'add to cart'}
                                    </span>
                                    <span class="icon_product">
                                      <i class="fa-regular fa-heart"></i>
                                    </span>
                                </div>


                </div>
            `
            
        }
       
});
    data.forEach(product=> {
        const isInCart = cart.some(cartItem => cartItem.id === product.id)
        if (product.catetory == "mobiles") {
            const old_price_paragraf=product.old_price ? `<p class="old_price">$${product.old_price}</p>` : ""
            const sale_product_parsent=product.old_price ?`<span class="sale_product">${(Math.floor((product.old_price - product.price) / product.old_price * 100))}%</span>` : ""
            swiper_Phones.innerHTML += `
                <div class="swiper-slide product">
                                ${sale_product_parsent}
                                <div class="img_product">
                                    <a href="#"><img src="${product.img}" alt=""></a>
                                </div>
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="name_product"><a href="#">${product.name}</a></p>
                                <div class="price">
                                    <p><span>$${product.price}</span></p>
                                    ${old_price_paragraf}

                                </div>
                                <div class="icons">
                                        <span class="btn_add_cart ${isInCart ? 'active' : ''} " data-id="${product.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'item in cart' : 'add to cart'}
                                    </span>
                                    <span class="icon_product">
                                        <i class="fa-regular fa-heart"></i>
                                    </span>
                                </div>


                </div>
            `
            
        }
       
});

      
// swiper slider product
    //  Initialize Swiper 
var swiper = new Swiper(".slide_product", {
    slidesPerView:5,
    spaceBetween:20,
    //   التمرير التلقاءي
      autoplay:{
        delay:2000,
      },
      navigation:{
        nextEl:".next",
        prevEl:".prev"
      },
    //   الحلقة
    loop:true,
     breakpoints:{
      1200:{
        slidesPerView : 5,
        spaceBetween: 20
      },
       1000:{
        slidesPerView : 4,
        spaceBetween: 20
      },
      700:{
        slidesPerView: 3 , 
        spaceBetween: 15 ,

      },
      0:{
        slidesPerView : 2,
        spaceBetween: 10
      }
    }
    });
})

