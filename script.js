//SEARCH BAR SHOW AND HIDE

let searchIconI = document.querySelector('#search-icon-show-hide');

searchIconI.addEventListener('click', function(){
    let searchBlockDiv = document.querySelector('#search-block');
    let searchInput = document.querySelector('#search-input');

    if(searchBlockDiv.style.height > "0px"){ 
        searchBlockDiv.style.height = "0px";
    }else{
        searchBlockDiv.style.height = "78px";
        searchInput.focus();
    }
});
