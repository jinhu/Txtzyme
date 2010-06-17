$(document).ready(function(){

	function port_pin () {
		var port = $('[name=port]:checked').attr('value');
		var pin = $('[name=pin]:checked').attr('value');
		return "/"+port+"/"+pin;
	};

	$('[name=port],[name=pin]').click(function(obj){
		$('[name=direction],[name=state]').removeAttr('checked') });

	$('[name=state]').click(function(obj){
		$('[name=direction][value=O]').click();
		$.ajax({ type: 'PUT', url: port_pin() , data: "state="+this.value });
	});

	$('[name=direction][value=I]').click(function(obj){
		$.ajax({ type: 'GET', url: port_pin(), success: function(data) {
			$('[name=state][value='+data+']').focus();
		} });
	});

});