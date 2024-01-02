const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper= document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const clearButtonConsole = document.querySelector("#clearButtonConsole");
const imageListWrapper = document.querySelector(".imagelist-wrapper");


// runs Events 
runEventListeners();
function runEventListeners(){
    form.addEventListener("submit", search)
    clearButton.addEventListener("click", clear);    
    clearButtonConsole.addEventListener("click", clearConsole);    
}

function clear() {
    console.log("Hakan")     // In order to test function
    searchInput.value = "";
    imageListWrapper.innerHTML = ""; //Alternative to the below command
    // Array.from(imageListWrapper.children).forEach((child)=>child.remove())
    
}

function clearConsole (){
   searchInput.value = "";
   console.clear(); 
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
    .then((data)=>{     // console.log(data)})    console.log(data.results)    
        Array.from(data.results).forEach((image)=>{
            // console.log(image.urls.small)   // For check whether data received or not
            addImageToUI(image.urls.small)
           })
        })
        .catch((err)=> console.log(err));    
    
        e.preventDefault();
}

function addImageToUI(url){
    // <div class="card">
    //      <image src="" alt=""></image>  // In order to visualize structure
    // </div>

    console.log(imageListWrapper) // For check whether data received or not
    const div = document.createElement("div");
    div.className = "card"

    const img =document.createElement("img");
    img.setAttribute("src",url);
    img.height='200';
    img.width ='200';

    div.append(img);
    imageListWrapper.append(div)
};
