// Search Function - galing lang to w3schools...

function searchProduct() {
    // Declaring Variables
    var input, list, product, empty, test, i;
    input = document.getElementById("searchInput").value.toLowerCase();
    list = document.getElementsByClassName("product");
    empty = document.getElementsByClassName("empty");

    for (i = 0; i < list.length; i++) {
        product = list[i].getElementsByClassName("product__title")[0];
        if (product.innerHTML.toLowerCase().indexOf(input) > -1) {
            list[i].style.display = "";
            test = true;
        } else {
            list[i].style.display = "none";
        }
        if (i == list.length - 1 && test != true) { 
            empty[0].style.display = "block";
        } else {
            empty[0].style.display = "none";
        }
    }
}

var counter = 0;
var switchToggle = document.getElementsByClassName("btn--toggle");
var image = document.getElementById("searchInput");
var darkInput = document.getElementsByClassName("input__search");
var darkProd = document.getElementsByClassName("product");

switchToggle[0].addEventListener('click', ()=> {
        
        if(counter == 0) {
            document.documentElement.style.setProperty('--clr-accent', 'hsl(350, 100%, 65%)')
            image.classList.add("leni");
            document.body.classList.add("body__leni");
            counter++;
        } else if (counter == 1){
            image.classList.remove("leni");
            document.body.classList.remove("body__leni");
            document.documentElement.style.setProperty('--clr-accent', 'hsl(26, 100%, 50%)')
            document.documentElement.style.setProperty('--clr-light', 'hsl(200, 6%, 10%)')
            document.documentElement.style.setProperty('--clr-dark', 'hsl(0, 0%, 100%)')
            darkInput[0].classList.add("input__search--dark");
            for(let x=0; x < darkProd.length; x++) {
                darkProd[x].classList.add("product--dark");
            }
            
            
            counter++;
        } else {
            counter = 0;
            darkInput[0].classList.remove("input__search--dark");
            document.documentElement.style.setProperty('--clr-light', 'hsl(0, 0%, 100%)')
            document.documentElement.style.setProperty('--clr-dark', 'hsl(200, 6%, 10%)')
            for(let x=0; x < darkProd.length; x++) {
                darkProd[x].classList.remove("product--dark");
            }
        }
    })