$(function() {
    FastClick.attach(document.body);
});

$(".panel-trigger").click(function(){
	var a = $(this).attr("id");
	var b = $(".panel-trigger").data("close");
	$.panels.show({
        position: a,
        forceClose: b
    });
});

$(".panel-close").click(function(){
	var a = $(this).attr("id");
	$.panels.hide({
        position: a
    });
});

$("nav > a").click(function(){
	var x = $(this).attr("class");
	var y = $(this).data("close");
	if ($(this).is("#current")) {
		return false;
	} else {
		$("nav > a").removeAttr("id");
		$(".panel-trigger").attr("id", x);
		$(".panel-trigger").data("close", y);
		$(this).attr("id", "current");
	}

});

$('#menu').click(function(){
	$('.panel-top .default').css('display', 'none');
	$('.panel-top .demo').css('display', 'block');
	$.panels.show({
		position: 'top'
	});
});

$('#menu-close').click(function(){
	$.panels.hide({
		position: 'top'
	});
});

$('.panel-trigger').click(function(){
	$('.panel-left ').removeClass('page-ex-bg');
	$('.panel .default').css('display', '');
	$('.panel .demo').css('display', '');
});

$('#message-example').click(function(){
	$('.panel-bottom .default').css('display', 'none');
	$('.panel-bottom .demo').css('display', 'block');
	$.panels.show({
		position: 'bottom',
		forceClose: true
	});
});

$('#message-close').click(function(){
	$.panels.hide({
		position: 'bottom'
	});
});

$('#page-example').click(function(){
	$('.panel-left ').addClass('page-ex-bg');
	$('.panel-left .default').css('display', 'none');
	$('.panel-left .demo').css('display', 'block');
	$.panels.show({
		position: 'left',
	});
});

$('#page-example-close').click(function(){
	$.panels.hide({
		position: 'left'
	});
});
