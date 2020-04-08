                    /****SEARCH BAR SHOW AND HIDE****/

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

                         /****TAB MENU****/

let tabBtns = document.querySelectorAll('#tab-btns li');
let tabContentDivs = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {

    btn.addEventListener('click', function(){
        
        const target = document.querySelector(btn.dataset.tabTarget);

        //highlight active tab button
        tabBtns.forEach(item => {
            item.classList.remove('tab-btn-active');
        })  
        btn.classList.add('tab-btn-active');
        
        //Display content depending on tab clicked
        tabContentDivs.forEach(content =>{
            content.classList.remove('tab-content-active');
        })
        target.classList.add('tab-content-active');

        

    })
});