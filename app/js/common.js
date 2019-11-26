$(function() {


	var d = new Date();

	var month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

	$('.header__date span').text(" " +d.getDate()+ " " + month[d.getMonth()]
	+ " " + d.getFullYear() + " ");


	
/*
	
	var dayVal = $('.chsena__number').text();

	{
	if(dayVal == d.getDate() ){
		$('.chesna__item').css({'opacity':'1', 'pointer-events' : 'all'});
	} else{
		$('.chesna__item').css({'opacity':'0.4', 'pointer-events' : 'none'});
	}
	
*/

	$('.btn').click(function(e){	
		e.preventDefault();
		$(this).addClass('btn-choose').siblings('.btn').removeClass('btn-choose');
		var valbtn = $('.btn-choose').text();
		$('#get-val').val(valbtn);
	})

	$('input[type="file"]').change(function(){
		var filename = $("input[type='file']")[0].files[0].name;
		$('.success-file').css({'display' : 'inline-block'});
		$('.success-file span').text(filename);
});





/** 

	var dropZone = $('.drop-file'),
	maxFileSize = 10000000;

	dropZone[0].ondragover = function() {
    dropZone.addClass('.hover-zone');
    return false;
};
    
dropZone[0].ondragleave = function() {
    dropZone.removeClass('.hover-zone');
    return false;
};

dropZone[0].ondrop = function(event) {
	event.preventDefault();
	dropZone.removeClass('.hover-zone');
	$('.success-file').css({'display': 'inline-block'});
};


var file = event.dataTransfer.files[0];
        
if (file.size > maxFileSize) {
	$('.success-file').text('Файл слишком большой!').css({'color': '#BF0C0C'});
    return false;
}

*/


	$("#fsteps").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "http://60.testim-sites.ru/radisson/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('#page3').css('display', 'block');
			$('#page2').css('display', 'none');
		});
		return false;
	});

	$('.btn').click(function(e){
		e.preventDefault();
		$('#page2').fadeIn();
	})

	$('.check-from').validate({
			fileupload: {
					required: true, 
					accept: "image/jpeg, image/pjpeg, image/png, image/pdf"
			}
	});

	
});
