//for DVR
function dvr(add) {
    selectedCategory = $('.dvr-dropdown').text();
    selectedBrand = 3;
    selectProducts = cctvs[selectedCategory + ":" + selectedBrand];
    productDropdown = $('.dvr-category');
    productDropdown.empty();
    productPrice = $('#dvr-price');
    productPrice.empty();
    
    for (var i = selectProducts.length - 1; i >= 0; i--) {
      
      if (selectProducts[i].category >= add ) {

        var category = selectProducts[i].category;
        var id = selectProducts[i].id
        var price = selectProducts[i].price;
      }
    }
    productDropdown.append($("<option></option>")
          .attr("value",id)
          .text(category + " CHANNEL")); 
    // productDropdown.append($("<selected></selected>").attr("value",id).text(category));
    productPrice.val(price);

    
          
    // total(price);
}

//for smps
function smps(add) {
    selectedCategory = $('.smps-dropdown').text();
    selectedBrand = 4;
    selectProducts = cctvs[selectedCategory + ":" + selectedBrand];
    productDropdown = $('.smps-category');
    productDropdown.empty();
    productPrice = $('#smps-price');
    productPrice.empty(); 
    for (var i = selectProducts.length - 1; i >= 0; i--) {
      
      if (selectProducts[i].category >= add ) {
        var category = selectProducts[i].category;
        var id = selectProducts[i].id
        var price = selectProducts[i].price;
      }
    }
    productDropdown.append($("<option></option>")
          .attr("value",id)
          .text(category + " CHANNEL")); 
    productPrice.val(price);
}

//for connector
function connector(add) {
   
    quantity = $('#connector-quantity');
    quantity.empty(); 
    quantity.val(add);
}

// function total(price) {
//     var qty =$('.smps-category');
//     var price = price;
//     var total = price * qty;
// }

// Grand Total
function grandTotal(){
  var subtotal = 0;
    $('.total').each(function(i){
        var price = $(this).html();
        if (!isNaN(price)) subtotal += Number(price);
    });
    subtotal = subtotal.toFixed(2);
    $('.grandTotal').html(subtotal);
}