const formWrapper = document.querySelector(".form-wrapper")
const form = document.querySelector("#form")
const searchInput = document.querySelector("#searhInput")
const buttonWrapper = document.querySelector(".button-wrapper")
const searchButton = document.querySelector("#searchButton")
const clearButton = document.querySelector("#clearButton")
const imageListWrapper = document.querySelector(".imagelist-wrapper")

// runs Events 
runEvetListeners();
function runEvetListeners(){
    form.addEventListener("submit", search)
}


function search(e){
    const value = searchInput.value.trim();

    // Request Parameter spring-Rest API
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
            Authorization: "Client-ID  6eGKEC1yCeOOcIwo7IPzM-oxiwbZV70EqXt86oe36P4"
        }    
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
    

    e.preventDefault();
}
