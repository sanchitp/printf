


	$(document).ready(function(){
  $("#click1").hover(function(){
    $("#cl1").toggle(1000);

  
});



  $("#click2").hover(function(){
    $("#cl2").toggle(1000);

});

		$(".handle").click(function(){
			$("#ins").hide();
			$('.content').css("display", "none");
			var var1= $(this).attr('data-handles');
			$('.content[data-text="'+var1+'"]').css("display", "block");
		});


  $("#clk").click(function(){
    $("#ins").hide();
    $("#qu1").show();
    $("#btn").show();

  
  });
});
