//Check if the DOM content has completed loading page content.// if it has run the ready function.
if (document.readyState =='loading'){
    document.addEventListener('DOMContentLoaded',  ready)
} 
//if it has not run the ready function
else{
    ready()
}

function ready(){
    let removeCartItemsButtons = document.getElementsByClassName('cart-remove')

    for(let i = 0; i<removeCartItemsButtons.length;i++)
    let button = removeCartItemsButtons[i]
    button.addEventListener('click', removeCartItem)
}

function removeCartItem(event){
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}