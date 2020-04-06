let searchIconI = document.querySelector('#search-icon');
let searchBlockDiv = document.querySelector('#search-block');
let searchInput = document.querySelector('#search-input');

searchIconI.addEventListener('click', function(){
    if(searchBlockDiv.style.height == "0px"){
        
        searchBlockDiv.style.height = "78px";
        searchInput.focus();
    }else{
        searchBlockDiv.style.height = "0px";
    }
});
