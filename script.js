$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");
        }
        
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('nav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});