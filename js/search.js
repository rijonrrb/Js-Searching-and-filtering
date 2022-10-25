const search = () => {
    let filter = document.getElementById('search').value.toUpperCase();
    let productBox = document.getElementsByClassName("product");
    var productlist = "";
    var mainProductList = productBox[0];
    for (let i = 1; i < mainProductList.childNodes.length; i++) {
        if (i%2) {
            console.log(productBox[0].childNodes[i]);
            productlist = productlist + '<div class ="itemBox">' + mainProductList.childNodes[i].innerHTML + '</div>';
        }
    }
    document.getElementById("product_list").innerHTML = productlist;
    let productBox2 = productBox.getElementsByClassName("card");
    //let productBox3 = productBox2.getElementsByClassName("card");
    let product = document.querySelectorAll('.tt');
    let pname = productBox2.getElementsByTagName('h4');
    for(var i = 0 ; i<pname; i++){
        let match = product[i].getElementsByTagName('h4')[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
               product[i].style.display = "";
            }
            else{
               product[i].style.display = "none";
            }
        }
    }

}