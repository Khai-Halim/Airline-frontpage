//SEARCH BAR SHOW AND HIDE

let searchIconI = document.querySelector('#search-icon-show-hide');
let cancelIconI = document.querySelector('#cancel-search');
let searchBlockDiv = document.querySelector('#search-block');
let searchInput = document.querySelector('#search-input');

searchIconI.addEventListener('click', function(){
    if(searchBlockDiv.style.height > "0px"){ 
        searchInput.value = "";
        searchBlockDiv.style.height = "0px";
    }else{
        searchBlockDiv.style.height = "78px";
        searchInput.focus();
    }
});

//CANCEL SEARCH AND HIDE SEARCH BAR

cancelIconI.addEventListener('click', function(){
    searchInput.value = "";
    searchBlockDiv.style.height = "0px";
});