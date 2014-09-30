// Dependencies: jQuery (using: 1.11.1)
$(".section--branding__grid-item").on('click',function(){
  $(".content-viewer").removeClass("content-viewer--empty");
});

$(".content-viewer__close").on('click',function(){
  $(".content-viewer").addClass("content-viewer--empty");
});


$(".active").on('click',function () {
  $('body').scrollTo('.section--branding',{duration:'slow'});
});