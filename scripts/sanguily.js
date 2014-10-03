// Dependencies: jQuery (using: 1.11.1)


function ajaxIt(link) {
  $( ".content-viewer" ).load( link+" .ajax-me").waitForImages(function() {
    alert("stand to");
    $( ".content-viewer" ).removeClass("content-viewer--empty");
  });
}

function historyIt(link) {
  window.history.pushState(null, null, link);
}

//on closing a portfolio page
$("body").on('click','.content-viewer__close',function(){
  historyIt('index.html');
  $(".content-viewer").addClass("content-viewer--empty");
});

//on choosing a portfolio page
$(".section--branding__grid-item__a").on('click',function(event){
  var a_href = $(this).attr('href');
  historyIt(a_href);
  event.preventDefault();
  ajaxIt(a_href);

  //get page title and set as document title
  var docTitle = "Susan Pietrobono Sunguily: "+ $(".content-viewer__heading").html();
  document.title = docTitle;
});


window.addEventListener('popstate', function(e) {
  ajaxIt(location.pathname);
});
