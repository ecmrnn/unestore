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