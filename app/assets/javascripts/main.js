
//for addition

function addition(){
    var dome = Number(document.getElementById("dome").value);
    $('.domeQty').val(dome);
    var bullet = Number(document.getElementById("bullet").value);
    $('.bulletQty').val(bullet);
    var add = (dome + bullet);

    document.getElementById('demo').innerHTML = add;
    dvr(add);
    smps(add);
    connector(add);
    
}

//for price and total 

 jQuery(function() {
    return $(document).on("change",".cctv", function(){
      selectedBrand = $(this).parent('td').prev('td').text();
      // alert(selectedBrand);
      selectedCategory = $(this).val();
      // alert(selectedCategory);
      selectProducts = cctvsPrice[selectedBrand + ":" + selectedCategory];
      productPrice = $(this).parent('td').next('td').children('.price');
      productPrice.empty();

      var price = selectProducts[0].price;
      $(this).parent('td').next('td').children('.price').val(price);
      var qty = $(this).parent('td').next('td').next('td').children('.qty').val();
      var place_total = $(this).parent('td').next('td').next('td').next('td').children('.total');
      var total = price * qty;
      place_total.html(total);
      
      grandTotal();
 
    });
    
  });