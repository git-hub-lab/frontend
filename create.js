function setBot() {
	
	formData =  new FormData
	formData.append("token", $("#token").val())
	formData.append("text", $("#text").val())

	if($("#tec").is(':checked')) {
		formData.append("tec", "yes")
	}
	
	call = $.ajax( {
		url: 'https://apidel.massivebox.eu.org/setbot',
		type: 'POST',
		async: false,
		data: formData,
		processData: false,
		contentType: false
	});
	
	response = call.responseJSON	
    
	UIkit.modal($("#output")).show();
	UIkit.toggle($("#output-more")).toggle();

	if (response["ok"]){
		$("#output-title").html("Success!")
	}else{
		$("#output-title").html("Error")
	}
    
	$("#output-text").html(response['message'])
    $("#output-more").html(response['details'])
    
}
