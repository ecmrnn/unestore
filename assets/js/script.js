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


switchToggle[0].addEventListener('click', ()=> {
        
        if(counter == 0) {
            document.documentElement.style.setProperty('--clr-accent', 'hsl(350, 100%, 65%)')
            image.style.backgroundImage = "url('../images/products/search-btn.png')";
            counter++;
        } else if (counter == 1){
            document.documentElement.style.setProperty('--clr-accent', 'hsl(26, 100%, 50%)')
            document.documentElement.style.setProperty('--clr-light', 'hsl(200, 6%, 10%)')
            document.documentElement.style.setProperty('--clr-dark', 'hsl(0, 0%, 100%)')
            
            counter++;
        } else {
            counter = 0;
            document.documentElement.style.setProperty('--clr-light', 'hsl(0, 0%, 100%)')
            document.documentElement.style.setProperty('--clr-dark', 'hsl(200, 6%, 10%)')
        }
    })