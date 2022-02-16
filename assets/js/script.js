// Search Function - galing lang to w3schools...

function searchProduct() {
    // Declaring Variables
    var input, list, product;
    input = document.getElementById("searchInput").value.toLowerCase();
    list = document.getElementsByClassName("product");

    for (i = 0; i < list.length; i++) {
        product = list[i].getElementsByClassName("product__title")[0];
        if (product.innerHTML.toLowerCase().indexOf(input) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
}