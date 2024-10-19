const PRODUCTS = [
    {
        image: 'Images/watch.jpg',
        name: 'Mens watch',
        description: 'Recommended by 99% of customers',
        price: '$1200',
        category: 'accessories, watch',
    },
    {
        image: 'Images/Palms.jpg',
        name: 'Mens watch',
        description: 'Recommended by 99% of customers',
        price: '$1200',
        category: 'foot wears, palm, footwears',
    },
    {
        image: 'Images/female-dress1.jpg',
        name: 'Mens watch',
        description: 'Recommended by 99% of customers',
        price: '$1200',
        category: 'dress, female',
    },
    {
        image: 'Images/sunglass.jpg',
        name: 'Mens watch',
        description: 'Recommended by 99% of customers',
        price: '$1200',
        category: 'accessories, glass',
    },
    {
        image: 'Images/watch.jpg',
        name: 'Mens watch',
        description: 'Recommended by 99% of customers',
        price: '$1200',
        category: 'accessories, hand-wears',
    },
    {
        image: 'Images/Palms.jpg',
        name: 'Mens watch',
        description: 'Recommended by 99% of customers',
        price: '$1200',
        category: 'foot wears, footwears',
    },
    {
        image: 'Images/female-dress1.jpg',
        name: 'Mens watch',
        description: 'Recommended by 99% of customers',
        price: '$1200',
        category: 'accessories',
    },
    {
        image: 'Images/sunglass.jpg',
        name: 'Mens watch',
        description: 'Recommended by 99% of customers',
        price: '$1200',
        category: 'accessories',
    },

]

let allProduct = document.querySelector('.products');
function displayProduct() {
    for (let index = 0; index < PRODUCTS.length; index++) {
        let productCont = `
       <div class = 'product-wrapper' data-aos="zoom-in" data-id='${PRODUCTS[index].category}'>
        <img src="${PRODUCTS[index].image}" data-aos="fade-up" class =" img"/>
        <p class="p" data-aos="fade-up">${PRODUCTS[index].name} </p>
        <p data-aos="fade-up">${PRODUCTS[index].description} </p>
        <p class="p" data-aos="fade-up">${PRODUCTS[index].price} </p>
        <div class= 'cart'>
        <button type = "button" id= "add-cart">Add To Cart</button>
        </div>
        <div class="cart2 none">
                <button class="btn minus" id="minus">-</button>
                <span class= "initial-value">0</span>
                <button class="btn plus" id="plus">+</button>
                </div>
       </div>
       `
        allProduct.innerHTML += productCont;
        let productWrapper = document.querySelector('.product-wrapper');
        let addCart = document.querySelectorAll('#add-cart');
        let cartNum = document.querySelector('#cart-num');
        let cart2 = document.querySelector('.cart2');
        let minus = document.querySelectorAll('.minus');
        let plus = document.querySelectorAll('.plus');

        addCart.forEach(button => {
            document.querySelectorAll('.initial-value').forEach(el => {
                el.innerHTML = 1;
            })
            button.addEventListener("click", function () {
                let elem = this.parentElement.nextElementSibling;
                this.style.display = 'none';
                cartNum.innerHTML++;
                elem.style.display = 'flex';
                // elem.children[1].innerHTML = 1;               
            })
        });
        // console.log(minus);
        minus.forEach(el => {
            el.addEventListener('click', () => {
                // console.log(el.innerHTML);
                if (el.nextElementSibling.innerHTML > 0) {
                    el.nextElementSibling.innerHTML--;
                
                } else {
                    el.disabled = true;

                    if(cartNum.innerHTML >= 0){
                        cartNum.innerHTML--;
                    }
                }
            })
        })
        plus.forEach(el => {
            el.addEventListener('click', () => {
                el.parentElement.children[0].disabled = false;

                el.previousElementSibling.innerHTML++;
            })
        })
        // elem.children[0].addEventListener('click', ()=>{
        //     if (elem.children[1].innerHTML > 0) {
        //         elem.children[1].innerHTML--;

        //     }else if (elem.children[1].innerHTML == 0){
        //         cartNum.innerHTML--;
        //             elem.style.display = 'none';
        //             this.style.display = 'block';
        //     }else{
        //         elem.children[0].disabled = true;
        //     }
        // });
        // elem.children[2].addEventListener('click', ()=>{
        //     elem.children[0].disabled = false;
        //     elem.children[1].innerHTML++;
        // });
    }
}
displayProduct();
let contents = document.querySelectorAll('.product-wrapper');
let search = document.querySelector('input');
search.addEventListener('input', function () {
    contents.forEach(e => {
        if (search.value == "") {
            e.style.display = "grid";
        } else if (e.dataset.id.includes(search.value.trim())) {
            e.style.display = "grid";
        } else {
            e.style.display = "none";
        }
    });
})
