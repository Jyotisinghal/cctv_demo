//for DVR auto category with price

function dvr(add) {
    selectedCategory = $('.dvr-dropdown').text();
    selectedBrand = 3;
    selectProducts = cctvs[selectedCategory + ":" + selectedBrand];
    productDropdown = $('.dvr-category');
    productDropdown.empty();
    productPrice = $('#dvr-price');
    productPrice.empty();
    
    for (var i = selectProducts.length - 1; i >= 0; i--) {
      
      if (selectProducts[i].category >= add && add != 0 ) {

        var category = selectProducts[i].category;
        var id = selectProducts[i].id
        var price = selectProducts[i].price;
      }
    }
    productDropdown.append($("<option></option>")
          .attr("value",id)
          .text(category + " CHANNEL")); 
    productPrice.val(price);

    var qty = $('#dvr-quantity').val();
    var price = $('#dvr-price').val();
    var total = price * qty;
    $('#dvr-total').html(total);
    
}


//for smps auto category with price

function smps(add) {
    selectedCategory = $('.smps-dropdown').text();
    selectedBrand = 4;
    selectProducts = cctvs[selectedCategory + ":" + selectedBrand];
    productDropdown = $('.smps-category');
    productDropdown.empty();
    productPrice = $('#smps-price');
    productPrice.empty(); 
    for (var i = selectProducts.length - 1; i >= 0; i--) {
      
      if (selectProducts[i].category >= add && add != 0) {
        var category = selectProducts[i].category;
        var id = selectProducts[i].id
        var price = selectProducts[i].price;
      }
    }
    productDropdown.append($("<option></option>")
          .attr("value",id)
          .text(category + " CHANNEL")); 
    productPrice.val(price);
    
    var qty = $('#smps-quantity').val();
    var price = $('#smps-price').val();
    var total = price * qty;
    $('#smps-total').html(total);
}



//for auto quantity connector

function connector(add) {
   
    selectedCategory = $('.connector-dropdown').text();
    
    selectedBrand = 5;
    selectProducts = cctvs[selectedCategory + ":" + selectedBrand];
     
    productDropdown = $('.connector-category');
    productDropdown.empty();
    productPrice = $('#connector-price');
    productPrice.empty(); 

    var id = selectProducts[0].id;
    var category = selectProducts[0].category;
    var price = selectProducts[0].price;
    productDropdown.append($("<option></option>")
          .attr("value",id)
          .text(category)); 
    productPrice.val(price);

    quantity = $('#connector-quantity');
    quantity.empty(); 
    quantity.val(add);

    var total = price * add;
    $('#connector-total').html(total);
}





// Grand Total all accessiories

function grandTotal(){
  var subtotal = 0;
    $('.total').each(function(i){
        var price = $(this).html();
        if (!isNaN(price)) subtotal += Number(price);
    });
    subtotal = subtotal.toFixed(2);
    $('.grandTotal').html(subtotal);
}