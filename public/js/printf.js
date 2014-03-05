


	$(document).ready(function(){
  $("#click1").hover(function(){
    $("#cl1").toggle(1000);

  
  });
});


$(document).ready(function(){
  $("#click2").hover(function(){
    $("#cl2").toggle(1000);

  
  });
});

		$(document).ready(function(){
		$(".handle").click(function(){
			$("#ins").hide();
			$('.content').css("display", "none");
			var var1= $(this).attr('data-handles');
			$('.content[data-text="'+var1+'"]').css("display", "block");
		});
	});


$(document).ready(function(){
  $("#clk").click(function(){
    $("#ins").hide();
    $("#qu1").show();
    $("#btn").show();

  
  });
});
