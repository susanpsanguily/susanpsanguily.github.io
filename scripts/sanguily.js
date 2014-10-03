// Dependencies: jQuery (using: 1.11.1)


function ajaxIt(link) {
  $( ".content-viewer" ).load( link+" .ajax-me").waitForImages(function() {
    
    setTimeout(function(){
      $( ".content-viewer" ).removeClass("content-viewer--empty");
    }, 200);
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
$("body").on('click','.section--branding__grid-item__a',function(event){
  var a_href = $(this).attr('href');
  historyIt(a_href);
  event.preventDefault();
  ajaxIt(a_href);
  //get page title and set as document title
  setTimeout(function(){
    var docTitle = "Susan Pietrobono Sunguily: "+ $(".content-viewer__heading").html();
    document.title = docTitle;
  }, 200);

});

//on clicking next or back
$("body").on('click','.content-viewer__controls__control--active',function(event){
  var a_href = $(this).attr('href');
  historyIt(a_href);
  event.preventDefault();
  ajaxIt(a_href);
  //get page title and set as document title
  setTimeout(function(){
    var docTitle = "Susan Pietrobono Sunguily: "+ $(".content-viewer__heading").html();
    document.title = docTitle;
  }, 200);

});



window.addEventListener('popstate', function(e) {
  ajaxIt(location.pathname);
});
