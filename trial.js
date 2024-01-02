const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper= document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imagelist-wrapper");


// runs Events 
runEventListeners();
function runEventListeners(){
    form.addEventListener("submit", search)
}


function search(e){
    const value = searchInput.value.trim();
    // @RequestParam  - Spring- Rest APİ
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method : "GET",
        headers : {
            Authorization : "Client-ID 6eGKEC1yCeOOcIwo7IPzM-oxiwbZV70EqXt86oe36P4"
        }
  
    })
    .then((res)=>res.json())
    .then((data)=>{console.log(data)})
        // Array.from(data.results).forEach((image)=>{
        //     // console.log(image.urls.small)
        //     addImageToUI(image.urls.small)
        //    })
        // })
        .catch((err)=> console.log(err));    
    
        e.preventDefault();
}
