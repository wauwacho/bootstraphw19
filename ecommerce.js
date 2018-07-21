$( document ).ready(function(){

// when add to cart is clicked, cart number will change to value in dropdown
$("#addtocartbutton").on("click", function() {
    // define variable for the number of items in cart
    var cartNum = $("#cartnumber");

    // define variable for the value of the selected dropdown item
    var selectedNum = $("#inputGroupSelect01 option:selected").text();
    
    // the variable cartNum will change to ...
    cartNum.html(selectedNum);
});

// if input field is empty when button is clicked, border becomes red
$("#submitbutton").on("click", function(){
    var userInput = $("#useremail").val();

    if(userInput.length === 0) {
        $("#submitbutton").removeAttr("data-dismiss");
        $("#useremail").css("border", "3px solid #cc0c00"); 
        $("#useremail").attr("placeholder", "Error!!!!!");
    }  
});

});