$(document).ready( function() {
    
    const ham = document.querySelector('.ham');

    const enlaces = document.querySelector('.enlaces-menu');

    ham.addEventListener('click', () => {
        
        enlaces.classList.toggle('activado');
        
    });

    /*$(".ham").addEventListener('click', function () {

        $(".enlaces-menu").classList.toggle('activado');

    }, false);*/
    
});//ready