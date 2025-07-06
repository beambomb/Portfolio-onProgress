const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBTN = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition(){
    //Button Click active class
    for(let i = 0; i < sectBTN.length; i++){
        sectBTN[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}

PageTransition()