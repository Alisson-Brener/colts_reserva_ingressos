//var form = querySelector(".i");
var quantidade = document.querySelector("#quantidade")
quantidade.addEventListener("blur", function(event){
    event.preventDefault();
    
    var select = document.querySelector("#local");
    var preco = document.querySelector(".preco")
    preco.textContent = select.options[select.selectedIndex].value * quantidade.value;
    
    console.log(select.options[select.selectedIndex].value * quantidade.value);
    
})
//var form = querySelector(".i");
var select = document.querySelector("#local");
select.addEventListener("change", function(event){
    event.preventDefault();
    
    var quantidade = document.querySelector("#quantidade")
    var preco = document.querySelector(".preco")
    preco.textContent = select.options[select.selectedIndex].value * quantidade.value;
    
    console.log(select.options[select.selectedIndex].value * quantidade.value);
    
})
