$(function() {


	var d = new Date();

	var month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

	$('.header__date span').text(" " +d.getDate()+ " " + month[d.getMonth()]
	+ " " + d.getFullYear() + " ");


	$('.btn').click(function(e){	
		e.preventDefault();
		$(this).addClass('btn-choose').siblings('.btn').removeClass('btn-choose');
		var valbtn = $('.btn-choose').text();
		$('#get-val').val(valbtn);
	})



$('.page__hover').click(function(e){
	e.preventDefault();
	$('#page2').fadeOut();
});

$('.step-back').click(function(e){
	e.preventDefault();
	$('#page2').fadeOut();
})

	$(".check-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "http://adventcalendar2020.ru/new/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('#page3').fadeIn();
			$('#page1').fadeOut();
			$('#page2').fadeOut();
			$('.get-name').text(name1.val());
		});
		return false;
	});

	$('.btn').click(function(e){
		e.preventDefault();
		$('#page2').fadeIn();
	})

	$('.check-from').validate({
	});

	$(document).on('keydown', function(e) {
		if (e.keyCode == 27)
		$('#page2').fadeOut();
	});
	

	var filename = $("input[type='file']");
	$('input[type="file"]').change(function(){
		$('.success-file').css({'display' : 'inline-block'});
		$('.drop-file').css({'border':'2px dashed green', 'background': '#f2f2f2'});
		$('.success-file span').text(filename[0].files[0].name);
});




$(document).on('dragenter', '.drop-file', function() {
  $(this).css('border', '1px solid #B8A1F5');
  return false;
});

$(document).on('dragover', '.drop-file', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).css('border', '2px dashed #B8A1F5');
  return false;
});

$(document).on('dragleave', '.drop-file', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).css('border', '2px dashed #422B7E');
  return false;
});

$(document).on('drop', '.drop-file', handleDrop, function(e) {
  if (e.originalEvent.dataTransfer) {
    if (e.originalEvent.dataTransfer.files.length) {
      e.preventDefault();
      e.stopPropagation();
      $(this).css('border', '2px dashed #0F0');
      saveFile(e.originalEvent.dataTransfer.files);
    }
  } else {
    $(this).css('border', '2px dashed #422B7E');
  }
  return false;
});

function handleDrop(e) {
  let dt = e.dataTransfer
  let files = dt.files
  handleFiles(files)
}

function handleFiles(files) {
  ([...files]).forEach(uploadFile)
}


	$(document).ready(documentReady);





// snow start

function documentReady() {
  var MAX_SNOW = 30;
  var MAX_SNOW_SIZE = 7;
  var MAX_SNOW_SPEED = 3;

  snowStart();

  function snowStart() {
    // console.log("// Snow animation start");
    createSnows();
	}

  function createSnows() {

    var container = $("#snow-animation-container");

    for (var i = 0; i < MAX_SNOW; i++) {
      var appendItem = getRandomItem(i);
              container.append(appendItem);
      var animateItem = $(".snow" + String(i));
      var randomTime = Math.random() * MAX_SNOW_SPEED;
      goAnimate(animateItem, i, randomTime);
      goAnimate2(animateItem);
    };

    // console.log("// Create snows");
  }

  function goAnimate(item, id, randomTime) {
    TweenMax.to(item, randomTime, {
      css: {
        marginTop: "+=100"
      },
      ease: Linear.easeNone,
      onComplete: function() {
        var topPosition = item.css("margin-top").replace("px", "");
        if (topPosition > $(window).height()) {
          changePosition(item);
          randomTime = Math.random() * MAX_SNOW_SPEED;
          goAnimate(item, id, randomTime);
        } else {
          goAnimate(item, id, randomTime);
        }

      }
    });
  }

  function goAnimate2(item) {

    var directionTime = 1 + Math.floor(Math.random() * 5);
    var randomDirection = 1 + Math.floor(Math.random() * 4);
    var delayTime = 1 + Math.floor(Math.random() * 3);

    if (randomDirection == 1) {

      TweenMax.to(item, directionTime, {
        css: {
          marginLeft: "+=100"
        },
        ease: Linear.easeOut,
        onComplete: function() {

          TweenMax.to(item, directionTime, {
            css: {
              marginLeft: "-=100"
            },
            delay: delayTime,
            ease: Linear.easeOut,
            onComplete: function() {
              goAnimate2(item);
            }
          });
        }
      });
    } else if (randomDirection == 2) {

      TweenMax.to(item, directionTime, {
        css: {
          marginLeft: "-=100"
        },
        ease: Linear.easeOut,
        onComplete: function() {
          TweenMax.to(item, directionTime, {
            css: {
              marginLeft: "+=100"
            },
            delay: delayTime,
            ease: Linear.easeOut,
            onComplete: function() {

              goAnimate2(item);

            }
          });
        }
      });
    } else if (randomDirection == 3) {

      TweenMax.to(item, directionTime, {
        css: {
          marginLeft: "+=100"
        },
        ease: Linear.easeOut,
        onComplete: function() {
          goAnimate2(item);
        }
      });
    } else if (randomDirection == 4) {

      TweenMax.to(item, directionTime, {
        css: {
          marginLeft: "-=100"
        },
        ease: Linear.easeOut,
        onComplete: function() {
          goAnimate2(item);
        }
      });
    }
  }

  function changePosition(item) {
    var _width = Math.floor(Math.random() * MAX_SNOW_SIZE);
    var _height = _width;
    var _blur = Math.floor(Math.random() * 5 + 2);
    var _left = Math.floor(Math.random() * ($(window).width() - _width));
    var _top = -$(window).height() + Math.floor(Math.random() * ($(window).height() - _height));

    item.css("width", _width);
    item.css("height", _height);
    item.css("margin-left", _left);
    item.css("margin-top", _top);
    item.css("-webkit-filter", "blur(" + String(_blur) + "px)");
    item.css("-moz-filter", "blur(" + String(_blur) + "px)");
    item.css("-o-filter", "blur(" + String(_blur) + "px)");
    item.css("-ms-filter", "blur(" + String(_blur) + "px)");
    item.css("filter", "blur(" + String(_blur) + "px)");
  }

  function getRandomItem(id) {
    var _width = Math.floor(Math.random() * MAX_SNOW_SIZE);
    var _height = _width;
    var _blur = Math.floor(Math.random() * 5 + 2);
    var _left = Math.floor(Math.random() * ($(window).width() - _width));
    var _top = -$(window).height() + Math.floor(Math.random() * ($(window).height() - _height));
    var _id = id;

    return getSmallSnow(_width, _height, _blur, _left, _top, _id);
  }

  function getSmallSnow(width, height, blur, left, top, id) {
    var item = "<div class='snow" + id + "' style='position:absolute; margin-left: " + left + "px; margin-top: " + top + "px; width: " + width + "px; height: " + height + "px; border-radius: 50%; background-color: white; -webkit-filter: blur(" + blur + "px); -moz-filter: blur(" + blur + "px); -o-filter: blur(" + blur + "px); -ms-filter: blur(" + blur + "px); filter: blur(" + blur + "px);'><img src='img/snow.png'></div>"
    return item;
  }

}
	
//snow end

var name1 = $('#name1');
var name2 = $('#name2');
var email = $('#email');
var company = $('#company');
var hotel = $('#hotel');
var dropFile = $('.drop-file');

var finput = $('.form__item input');

finput.keyup(function(e){
	e.preventDefault();
		if(name1.val() != 0 && name2.val() != 0 && company.val()  != 0 && email.val()  != 0 && hotel.val()  != 0 && dropFile.text()  != 0){
			$('.top__nav .step-next').css({'background': 'green', 'pointer-events':'all', 'opacity': '1', 'border-color': '#00d10a', 'box-shadow':'0px 0px 5px 5px rgba(0, 209, 10,0.2)'})
		}else{
			return false;
		}
});



});
