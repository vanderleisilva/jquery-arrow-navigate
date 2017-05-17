(function($) {

	if (!$) { console.log('Please, add jQuery library first'); return; }

	var seletor = 'input:visible:enabled, button:visible:enabled, select:visible:enabled';

	function main(event){
		var eu = $(this);

		if (eu.val().length != eu[0].selectionEnd && eu[0].selectionEnd > 0) { return; }

		if (event.keyCode != 37 && event.keyCode != 39) { return; }

		var itens = $(seletor);
		var indice = event.keyCode == 37 ? itens.index(eu)-1 : itens.index(eu)+1;
		
		if (indice < 0 || indice > itens.length-1) { return; }

		itens.eq(indice).focus();
	}

	$(document).ready(function() {
		setInterval(function(){ $(seletor).unbind('keyup',main).bind('keyup', main); }, 500);
	});

})(jQuery); 
