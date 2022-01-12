$(document).ready(function(){
    $("#para1").hide();
    $("#para2").hide();
    $("#design").click(function(){
        $("#para1").toggle();
        $("#para2").toggle();
    });
    $("#dev").hide();
    $("#development").click(function(){
        $("#dev").toggle();


    });
    $("#prod2").hide();
    $("#product").click(function(){
        $("#prod2").toggle();
    });



});
const form = document.querySelector("#content");
form.addEventListener("submit", function(button){
    button.preventDefault();
    const jsform = new FormData(form)
    const message = jsform.get("username")
    if(jsform.get("username") && jsform.get("email") && jsform.get("message")){
        alert("Thank you for contacting us " + message)

    }
    else{
        alert("Please fill all the required fields  ")
    }

})