function ajaxIt(e){$(".content-viewer").load(e+" .ajax-me"),"/index.html"===e||"/"===e||"/suesanguily/"===e||"/suesanguily/index.html"===e?$(".content-viewer").addClass("content-viewer--empty"):setTimeout(function(){$(".content-viewer").removeClass("content-viewer--empty")},200)}function historyIt(e){window.history.pushState(null,null,e)}var currentPage="";$("body").on("click",".content-viewer__close",function(){currentPage=location.pathname,historyIt("index.html"),$(".content-viewer").addClass("content-viewer--slide-down"),setTimeout(function(){$(".content-viewer").addClass("content-viewer--empty").removeClass("content-viewer--slide-down")},700)}),$("body").on("click",".section--branding__grid-item__a",function(e){var t=$(this).attr("href");historyIt(t),e.preventDefault(),"/"+t===currentPage?setTimeout(function(){$(".content-viewer").removeClass("content-viewer--empty")},200):ajaxIt(t),setTimeout(function(){var e="Susan Pietrobono Sunguily: "+$(".content-viewer__heading").html();document.title=e},200)}),$("body").on("click",".content-viewer__controls__control--active",function(e){var t=$(this).attr("href"),n="";historyIt(t),e.preventDefault(),n=$(this).hasClass("content-viewer__controls__control--prev")?"back":"next",$(".content-viewer").addClass("content-viewer--slideOut-"+n),setTimeout(function(){$(".content-viewer").load(t+" .ajax-me"),$(".content-viewer").removeClass("content-viewer--slideOut-"+n).addClass("content-viewer--slideIn-"+n),setTimeout(function(){$(".content-viewer").removeClass("content-viewer--slideIn-"+n)},350)},350),setTimeout(function(){var e="Susan Pietrobono Sunguily: "+$(".content-viewer__heading").html();document.title=e},200)}),window.addEventListener("popstate",function(e){ajaxIt(location.pathname)});