

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