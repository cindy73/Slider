$(document).ready(function(){
	$(".contenedor div").each(function(e){
		if (e != 0)
            $(this).hide();
	});
});

$("#siguiente").click(function(){
	if ($(".contenedor div:visible").next().length != 0)
		$(".contenedor div:visible").next().show().prev().hide();
	else {
		$(".contenedor div:visible").hide();
		$(".contenedor div:first").show();
	}
	return false;
});

$("#previo").click(function(){
	if ($(".contenedor div:visible").prev().length != 0)
		$(".contenedor div:visible").prev().show().next().hide();
	else {
		$(".contenedor div:visible").hide();
		$(".contenedor div:last").show();
	}
	return false;
});

$("#inicio").click(function(){
	$(".contenedor div:visible").hide();
	$('#primero').show();
});

$("#fin").click(function(){
	$(".contenedor div:visible").hide();
	$('#ultimo').show();
});