
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
    grandTotal();
}
function slectTag(productDropdown) {
    productDropdown.append($("<option></option>")
    .attr("value","")
    .text("Select category")); 
    $.each(selectProducts, function(key, cctv) { 
       
        productDropdown.append($("<option></option>")
            .attr("value",cctv.id)
            .text(cctv.category)); 
    });

}

//for price and total 

 jQuery(function() {
    return $(document).on("change",".cctv", function(){
      selectedBrand = $(this).parent('td').prev('td').children('.product-name').val();
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



    function validation(){
    var allValues = document.getElementsByClassName('cctv');
    
    for (let i = 0; i < allValues.length; i++ ) {
        var valuefor = allValues[i].value;
        if (valuefor === "") {
            allValues[i].style.backgroundColor = "red";
            document.getElementById('customermm').style.visibility = 'hidden';
            
            
    

        }
        else{
            allValues[i].style.backgroundColor = "black";
            document.getElementById('customermm').style.visibility = 'visible';
            
        }
        
        

    }
    
  } 


  
  function hiii() {
      validation(); 
      alert("hiii");
  }
  