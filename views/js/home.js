//Header opacity


window.addEventListener('scroll', () => {

    const windowTop = window.pageYOffset;

        //$('navbar-1').style.opacity = "0";

        if(windowTop > 100){
           $('.navbar-2').removeClass('hidden');
           $('.navbar-2').fadeIn(999);
        }else{
            $('.navbar-2').fadeOut();
            //$('.navbar-2').addClass('hidden');
        }

     
})    
