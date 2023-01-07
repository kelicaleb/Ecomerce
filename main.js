function resources(){
    fetch("https://fakestoreapi.com/products",{
        method:"GET",
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => data.forEach(data => loop(data)))
}
function loop(com){
    let div = document.getElementById("first")
    let li = document.createElement('li');
    li.setAttribute("class", "list");
    li.innerHTML=`
    <image class="image" src=${JSON.stringify(com.image)}/>
    <p>title: ${com.title}</p>
    <p>prize: $${com.price}</p>
  ` 
    let button = document.createElement("button")
    button.setAttribute("class", "btn btn-primary");
    button.setAttribute("id", "button");
    button.setAttribute("type", "submit")
    button.innerHTML="add to cart"
    let button2 = document.createElement("button")
    button2.setAttribute("class", "btn btn-secondary");
    button2.setAttribute("id", "button2")
    button2.innerHTML="remove"
    div.appendChild(li);
    li.append(button);
    li.append(button2);
    button.addEventListener("click", e => {
        e.preventDefault();
        addToCart(com)
    })
    button2.addEventListener("click", e => {
        e.preventDefault()
        remove(com)
    })
}
resources()
function addToCart(pass){
    let table = document.getElementById("table")
        let tr = document.createElement("tr");
        tr.setAttribute("id", "bell")
        tr.innerHTML=`
        <th scope="row" id="th"> <img class="image2" src="${pass.image}"/><p>$${pass.price}</p></th>
        <td>  <label for="quantity">Enter:</label>
        <input type="number" id="quantity" name="quantity" min="1" max="5"></td>
        <td></td>
        <td id="td></td>`
    let td = document.createElement("td")
    let remove = document.createElement("button");
    remove.setAttribute("class", "btn btn-danger");
    remove.setAttribute("id", "but");
    remove.setAttribute("type", "submit")
    remove.innerHTML="Remove"
    table.appendChild(tr)
    tr.append(td);
    td.append(remove)
    let form2 = document.querySelector("#form2")
    form2.addEventListener("submit", e=> {
        e.preventDefault()
        let element = document.getElementById('th').value;
        console.log(element)
    })
}
function remove(pass){
    let name = document.getElementById("bell");
    console.log(pass.title)
}
const form = document.querySelector("#search");
form.addEventListener("submit", e => {
    e.preventDefault();
    let name = e.target.search.value
    fetch(`https://fakestoreapi.com/products/${name}`,{
        method:"GET",
        headers:{
            'Content-type':"application/json"
        }         
    })
    .then(res => res.json())
    .then(data => {
        let p = document.createElement("p")
        p.innerHTML =`${JSON.stringify(data.title)}`
        document.body.appendChild(p);
    })
})
$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;
  
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
  
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  });