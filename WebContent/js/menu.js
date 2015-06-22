/* Menu Controller */

$(function() {

	tabsElementName = ".dropdown-menu li";
	var base = $(tabsElementName);
	var menu_id = $(base[0]).children().attr('id');

	$('#'+menu_id).click(function() {
		//alert("sdcaqc");
		$('#dialog').dialog('open');
		$('#overlay').removeClass('blur-out');
		$('#overlay').addClass('blur-in');
		// $('.pop-up').hide();
		$('.menu-pop-up-main').fadeIn(1000);
		$('menu-pop-up-main').attr('display', 'block');

		return false;
	});
	
	$('#order-quant').focusout(function() {
		var quant = $("#order-quant").val();
		alert(quant);
		var totPrice = quant * parseInt( $('#product-price').text() );
		$('#tot-price').innerHTML(totPrice);
	});
	
	$('.menu-pop-up__close').click(function(e) {

		$('menu-pop-up-main').fadeOut(700);
		$('#overlay').removeClass('blur-in');
		$('#overlay').addClass('blur-out');
		$('menu-pop-up-main').attr('display', 'none');
		e.stopPropagation();

	});
});

$(function(){
	$('#menu-cancel').click(function(e){
		$('menu-pop-up-main').fadeOut(700);
		$('#overlay').removeClass('blur-in');
		$('#overlay').addClass('blur-out');
		e.stopPropagation();
	});
	
});



