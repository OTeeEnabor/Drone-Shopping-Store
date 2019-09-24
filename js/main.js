

//readmore function
function readmore(){
    let hiddenText = document.getElementById("textHidden");
    let button = document.getElementById('readId');

    if (button.innerHTML ="Read More"){
        hiddenText.style.display ="none";
        button.innerHTML ="Read Less";
    }
    else{
        button.innerHTML ="Read Less";
        hiddenText.style.display="block";


    }
    alert('hellow')
}

//create a product object using constructor function
function Product(name, price,brand,path) {
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.path = path;
    this.description = "This " + this.name + " is made by " + this.brand + ". Do best and get yours now.";
}
//Product Prototypes
//The code below creates a prototype method for the Product object that gives a brief description of the object
Product.prototype.description = function () {
    let snippet = "This " + this.name + " is made by " + this.brand + ". Do best and get yours now."
    return snippet;
};
//The code below creates a prototype method for the Product object that adds the object into the DOM of the shop page
Product.prototype.createHtml = function() {
    const shop = document.getElementById('shop-section');
    const shopItem = document.createElement("div");
    //add the following list of classes to the div created- in ShopItem
    shopItem.classList.add("col-sm-12","col-lg-3",'shop-product');
    shopItem.innerHTML = `
           <div class="card">
                <img src="${this.path}" class="card-img-top" alt="${this.name}">
                <div class="card-body">
                    <h5 class="card-title shop-item-title">${this.name}</h5>
                    <p class="card-text currency shop-currency"><span class="currency shop-currency">R </span>${this.price}</p>
                    <p class="card-text item-description">${this.description}</p>
                    <button class="btn shop-button" type="button" onclick="load()"><i class='fas fa-shopping-cart'></i>Add to cart</button>
                </div>
           </div>`;
    
    shop.appendChild(shopItem);
};
//The code block below creates 4 drone objects
let drone_1 = new Product('Focus Drone',250000,'Drone World','/images/featured_drone_1_small.jpg');
let  drone_2 = new Product('JohE Drone',20000,'Drone World','/images/featured_drone_2_small.jpg');

// let jean_4 = new Product('Animal Skinny Jeans',500,'Animal Blue','/images/products/jeans/Animal-Print-Skinny-Jeans-SHOP.jpg');
// let jean_5 = new Product('Super Skinny Jeans',550,'Super Jeans','/images/products/jeans/Super-Stretch-Skinny-Jeans-SHOP.jpg');
//Create an array to store the 4 jeans objects
const drone = new Array();
drone[0] = drone_1;
drone[1] = drone_2;
// jean[2] = jean_4;
// jean[3]= jean_5;

//For loop to loop through the array and place each jean object into the shop page DOM
for (i=0; i < drone.length ;i++){
    drone[i].createHtml();
}