// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Avocado',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Tomato',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Banana',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'Lip stick',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Makeup',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Eyeliner',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Shorts',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Skirt',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            cartList.push(products[i]);
        }     
    }
}

// Exercise 2
function cleanCart() {
    cartList = [];
}

// Exercise 3
function calculateTotal() {
    var result = 0;
    applyPromotionsCart();
    for (var i = 0; i < cart.length; i++){
        result = cart[i].price*cart[i].quantity + result;
    }
    return result;
}

// Exercise 4
function generateCart() {
    for (var i = 0; i < cartList.length; i++){
        var found = cart.findIndex(product => product.id == cartList[i].id);
        if (found == -1) {
            cartList[i].quantity = 1;
            cart.push(cartList[i]);
        } else {
            cart[found].quantity++;
        }
    }
}

// Exercise 5
function applyPromotionsCart() {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id == 1 && cart[i].quantity >= 3) {
            cart[i].price = 10;
            console.log("precio", cart[i].price)
        } if (cart[i].id == 3 && cart[i].quantity >= 10) {
            cart[i].price = cart[i].price / 3;
        }
    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    products.forEach(product => {
        if (product.id == id) {
            if (cart.length == 0) {
                product.quantity = 1;
                cart.push(product);
            } else {
                var found = cart.findIndex(cartProduct => cartProduct.id == id);
                if (found == -1) {
                    product.quantity = 1;
                    cart.push(product);
                } else {
                    cart[found].quantity++;
                }
            }
        }
    })
    console.log(cart);
    printCart()
}

// Exercise 8
function removeFromCart(id) {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            if (cart[i].quantity > 1) {
                cart[i].quantity--;
                console.log("cantidad", cart)
            } else {
                cart = cart.filter(function (product) {
                    return product.id !== cart[i].id
                })
                console.log("solo1", cart)   
            }       
        }
        break;
    }   
    printCart();
}

// Exercise 9
function printCart() {
    var p = document.createElement("p");
    p.innerHTML = `<p>Total precio: ${calculateTotal()}<p> `
    
    var list = document.querySelector('.list');
    list.innerHTML = "";
    cart.forEach((product) => {
        var li = document.createElement("li");
        li.innerHTML = `<li><p>Artículo: </p>${product.name} <p>Precio: </p>${product.price} <p>Cantidad: </p>${product.quantity} <p>Eliminar: </p><button type="button" onClick="removeFromCart(${product.id})">X</button></li>`
        list.appendChild(li); 
    })

    list.appendChild(p);
}
