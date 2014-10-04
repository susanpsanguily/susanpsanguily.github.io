// Dependencies: jQuery (using: 1.11.1)


function ajaxIt(link) {
  $( ".content-viewer" ).load( link+" .ajax-me");
  alert(link);
  if (link === "/index.html" || link === "/") {
    $(".content-viewer").addClass("content-viewer--empty");
  }
  else{
    setTimeout(function(){
      $( ".content-viewer" ).removeClass("content-viewer--empty");
    }, 200);
  }
}

function historyIt(link) {
  window.history.pushState(null, null, link);
}

var currentPage = "";

//on closing a portfolio page
$("body").on('click','.content-viewer__close',function(){
  currentPage = location.pathname;
  historyIt('index.html');
  $(".content-viewer").addClass("content-viewer--slide-down");
  setTimeout(function(){
    $(".content-viewer").addClass("content-viewer--empty").removeClass("content-viewer--slide-down");
  }, 700);
});

//on choosing a portfolio page
$("body").on('click','.section--branding__grid-item__a',function(event){
  var a_href = $(this).attr('href');
  historyIt(a_href);
  event.preventDefault();
  if ("/"+a_href === currentPage) {
    setTimeout(function(){
      $( ".content-viewer" ).removeClass("content-viewer--empty");
    }, 200);
  }
  else{
    ajaxIt(a_href);
  }
  //get page title and set as document title
  setTimeout(function(){
    var docTitle = "Susan Pietrobono Sunguily: "+ $(".content-viewer__heading").html();
    document.title = docTitle;
  }, 200);

});

//on clicking next or back
$("body").on('click','.content-viewer__controls__control--active',function(event){
  var a_href = $(this).attr('href'),
      setDirection = "";
  historyIt(a_href);
  event.preventDefault();
  if ($(this).hasClass("content-viewer__controls__control--prev")) {
    setDirection = "back"; 
  }
  else{
    setDirection = "next";
  }
  $( ".content-viewer" ).addClass("content-viewer--slideOut-"+setDirection);  
  setTimeout(function(){
    $( ".content-viewer" ).load( a_href+" .ajax-me");
    $( ".content-viewer" ).removeClass("content-viewer--slideOut-"+setDirection).addClass("content-viewer--slideIn-"+setDirection);
    setTimeout(function(){
      $( ".content-viewer" ).removeClass("content-viewer--slideIn-"+setDirection);
    }, 350);

  }, 350);

  //get page title and set as document title
  setTimeout(function(){
    var docTitle = "Susan Pietrobono Sunguily: "+ $(".content-viewer__heading").html();
    document.title = docTitle;
  }, 200);

});



window.addEventListener('popstate', function(e) {
  ajaxIt(location.pathname);
});
