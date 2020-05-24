function Pizza(size, crust, total) {
    this.size = size;
    this.crust = crust;
    this.toppings = [];
    this.price = 0;
    }
    
Pizza.prototype.cost = function() {
   $(document).ready(function() {
    $("#submitPizza").click(function(event) {
        event.preventDefault();
        var sizeOfPizza = $('#size').val();
        console.log(sizeOfPizza);
        var pizzaCrust = $('#crust').val();
        console.log(pizzaCrust);
        var toppings = [];
        $("input[type = checkbox]:checked").each(function() {
            toppings.push($(this).val())
        });
        var top = 0;
        for (var i = 0; i < toppings.length; i++) {
            top += parseInt(toppings[i]);
        }
        var total = parseInt(sizeOfPizza) + parseInt(pizzaCrust) + parseInt(top);
        alert("the total is: " + total);

        $('#sizeP').append("<td>" + sizeOfPizza + "</td>");
        $('#crustP').append("<td>" + pizzaCrust + "</td>");
        $('#toppz').append("<td>" + top + "</td>");
        $('#sum').append("<td>" + total + "</td>");

    });
    $("#btnAddMore").click(function(event) {
        alert("delivery fee is 100");
        prompt("enter your location: ");
        prompt("enter your phone number")
        alert("we'll reach to you in a few");
    });
 });