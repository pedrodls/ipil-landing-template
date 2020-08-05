
//Header opacity
var cont=6;
var d;

window.addEventListener('load',() => {
    $('.animback').css('background-image', "url(views/content/img/iu.jpg)");
    $('.pre-loader-container').fadeOut(4000);
    d = setInterval(() => { if(cont>9) cont=6; else cont++;   $('.animback').css('background-image', "url(views/content/img/"+cont+".jpg)");} ,5000)
    $('.scroller').fadeOut(1000);

});

window.addEventListener('scroll', () => {
    const windowTop = window.pageYOffset;
        
        if(windowTop > 100){


            $('.navbar-2').removeClass('hidden');
            $('.navbar-2').fadeIn(999);

        }else{
            $('.navbar-2').fadeOut();

        }

        if(windowTop>150){

            $('.welcome-sms').css('animation', 'none')
            $('#frase').css('animation', 'none')
            
            $('.welcome-sms').hide(2000);
        }
        else
            $('.welcome-sms').show(100)

        if(windowTop>250){
            $('.scroller').fadeIn(1000);
            $('.scroller').on('click', () => $('html, body').animate({scrollTop:0}, 1000));
        }else
            $('.scroller').fadeOut(100);
     
});  

