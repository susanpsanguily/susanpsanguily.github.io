// Dependencies: jQuery (using: 1.11.1)
$(".section--branding__grid-item").on('click',function(){
  $(".content-viewer").removeClass("content-viewer--empty");
});

$(".content-viewer__close").on('click',function(){
  $(".content-viewer").addClass("content-viewer--empty");
});


$(".active").on('click',function () {
  $('.full-height').scrollTo('.section--branding',{duration:'slow'});
});


var offset = $( ".section--intro" ).height();
$( window ).resize(function() {
  offset = $( ".section--intro" ).height();
});

var sticky = document.getElementById("site-header");

$('.full-height').scroll(function() {
    
    if ( $('.full-height').scrollTop() > offset){
        $('.site-header').addClass('fixed');
        $('.site-header-spacer').addClass('visible');
    } else {
         $('.site-header').removeClass('fixed');
        $('.site-header-spacer').removeClass('visible');
    }
    

});

