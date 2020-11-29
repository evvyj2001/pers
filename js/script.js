$(document).ready(function(){
    //nav
    $('.depth2').hide();
    $('nav>ul>li').hover(function(){
        $(this).find('.depth2').stop().slideDown();
    },function(){
        $(this).find('.depth2').stop().slideUp();
    });

    //tab
    $('.tab_content li').hide();
    $('.tab_content li').eq(0).show();
    $('.tab_menu li').click(function(event){
        event.preventDefault();
        var ind = $(this).index();
        $('.tab_content li').hide();
        $('.tab_content li').eq(ind).show();
    });
});