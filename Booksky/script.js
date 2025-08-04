var popupbox = document.querySelector(".popup-box")
var popup_overlay = document.querySelector(".popup-overlay")

var addButton = document.getElementById("add-popup-button")

addButton.addEventListener("click", function(){
    popup_overlay.style.display = "block";
    popupbox.style.display = "block";
})

//cancel
var cancelPopup = document.getElementById("cancel-popup");

cancelPopup.addEventListener("click", function(event){
    event.preventDefault();
    popup_overlay.style.display = "none";
    popupbox.style.display = "none";
})

var container = document.querySelector(".container");
var addbook =  document.getElementById("add-book");
var book_title = document.getElementById("book-title");
var author = document.getElementById("author");
var description = document.getElementById("description");

addbook.addEventListener("click", function(event){
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${book_title.value}</h2>
            <h5>${author.value}</h5>
            <p>${description.value}</p>
            <button onclick="deletebook(event)">close</button>`
    container.append(div)
    popup_overlay.style.display = "none";
    popupbox.style.display = "none";

})

function deletebook(event){
    event.target.parentElement.remove();
}