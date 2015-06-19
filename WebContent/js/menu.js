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
		$('.menu-pop-up').fadeIn(1000);
		$('menu-pop-up').attr('display', 'block');

		return false;
	});
});
