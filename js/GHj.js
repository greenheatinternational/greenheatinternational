
$(document).ready(function() {
$(".mobile-navi").fadeOut(0);
    checkSize();
    $(window).resize(checkSize);
});

function checkSize(){
    if ($("#mlogo").css("display") == "none" ){
  $(".mobile-navi").fadeOut(0);
    }
}

$(document).ready(function(){
  
  $("#mlogo").click(function(){
    $(".mobile-navi").slideToggle(500);
  });

  $(".sub, .nodrop .main").click(function(){
    $(".mobile-navi").slideUp(100);
  });
  
    $("#mob1").click(function(){
		  $("#sob1").slideToggle(900);
    });

    $("#mob2").click(function(){
		  $("#sob2").slideToggle(900);
    });

    $("#mob3").click(function(){
		  $("#sob3").slideToggle(900);
    });

});



$(document).ready(function(){
$(".main").mouseenter(function(){
  $(".sub").removeClass('disp')
  $("#sub" + $(this).data("target")).addClass('disp')
});
  
$(".sub").mouseleave(function(){
  $(this).removeClass('disp')
});
});





$(document).ready(function(){
  
	$(".first").siblings().fadeOut(0);
  	$(".first").fadeIn(0); 
   		
 	$(".butt").click(function(){
        
		$("#p" + $(this).data('target')).siblings().fadeOut(0);
		$('#p' + $(this).data('target')).fadeIn(500);
   	}); 
		
   	$(".but").click(function(){
		$(".fullimage").removeClass('wwd1 wwd2 wwd3');
		$(".fullimage").addClass("wwd" + $(this).data('target'));
		$(this).addClass('bactive').siblings().removeClass('bactive');
	});
    
    $(".rut, .vut").click(function(){
		$(this).addClass('ractive').siblings().removeClass('ractive');
	}); 
    	
    $(".gut").click(function(){
		$("#i" + $(this).data('target')).siblings().removeClass('gactive');
		$('#i' + $(this).data('target')).addClass('gactive');
	}); 
    
});

  
 
var controller = new ScrollMagic.Controller();

	controller.scrollTo(function (newpos) {
			TweenLite.to(window, 1.0, {scrollTo: {y: newpos, autoKill:false}});
	});

	$(document).on("click", "a[href^='#']", function (e) {
		var id = $(this).attr("href");
			if ($(id).length > 0) {
				e.preventDefault();

				controller.scrollTo(id);

			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
			}
	});


$(document).ready(function(){
	$("#blogo").fadeOut(0);
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1000) {
    $("#blogo").fadeIn(500);
  } else {
    $("#blogo").fadeOut(500);
  }
});

});

$(document).ready(function(){

    $(document).ready(function () {
        $("#logo").attr("src", "/wp-content/uploads/2015/10/Logo-animation-2.gif?" + Math.random());
    });
    
 });
