const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

const cbFunction = function(){
    const result = navLinks.classList.contains('show-links');
    if(result){
        navLinks.classList.remove('show-links');
    }
    else{
        navLinks.classList.add('show-links');
    }
}

navToggle.addEventListener('click', cbFunction);