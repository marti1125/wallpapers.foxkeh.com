 var mov=document.getElementById("foxkehMov");mov.addEventListener('click',function(e){var _y=$(e.currentTarget).offset().top+$(e.currentTarget).height()-28;var _mouseY=window.scrollY+e.clientY;if(e.currentTarget.paused&&_mouseY<_y){e.currentTarget.play();}},false);$("#customizeMovie").hover(function(){$("#script").stop().animate({top:201});},function(e){$("#script").stop().animate({top:221});});mov.addEventListener('playing',function(e){$("#script").css({opacity:1});},false);