$(document).ready(function(){


	$("#t-story").hide();


	var index = 0;

	var $body = $("body");

	var imageUrls = [
		"img_1001.JPG",
		"img_1002.JPG",
		"img_1003.JPG",
		"img_1004.JPG",
		"img_1005.JPG",
		"img_1006.JPG",
		"img_1007.JPG",
		"img_1008.JPG",
		"img_1009.JPG",
		"img_1010.JPG",
		"img_1011.JPG",
		"img_1012.JPG",
		"img_1013.JPG",
		"img_1014.JPG",
		"img_1015.JPG",
		"img_1016.JPG",
		"img_1017.JPG",
		"img_1018.JPG",
		"img_1019.JPG",
	];

	var basePath = "/assets/beach/";
	var images = [];

	for(var i = 0; i < imageUrls.length; i ++){

		var newImage = new Image();

		newImage.src = basePath + imageUrls[i];
		newImage.onload = onLoad;
		images.push(newImage);

	}

	var loadedCount = 0;
	function onLoad(){

		loadedCount ++;

		if(loadedCount >= imageUrls.length){

			$("#wait").fadeOut("fast");
			startAnimation();
		}

	}

	function startAnimation(){

		var $container = $("<div id='beach-animation' style='position:fixed;top:0;left:0;display:none'></div>");

		$body.prepend($container);

		var loadedImages = [];

		for(var i = 0; i < images.length;i ++){

			var $newImage = $("<img src='"+images[i].src+"' style='z-index:0' />");
			loadedImages.push($newImage);

			$container.append($newImage);

		}

		var $images = $container.find("img");

		$images.hide();

		$container.show();

		var currentIndex = 0;

		loadedImages[currentIndex].fadeIn("fast").css("z-index:2");

		$("body .jumbotron .tfadeIn").hide();

		$("#t-story").show();

		$body.fadeIn("fast");

		startTextAnimation();

		var newIndex;


		var direction = 1;

		$("#rewind").on("click", function(){

			direction = direction * -1;

			return false;
		});

		$("#birds").on("click", function(){

			var bird = $("<img src='/assets/beach/pelican-nosedive.png' />");
			$body.append(bird);

			bird.css({
				top:0,
				position:"fixed",
				zIndex:"100",
				left:Math.floor((Math.random() * $body.width()) + 1)
			});

			bird.animate({
				top:200
			},{
				duration:500,
				complete: function(){
					bird.remove();
				}
			});

			return false;

		});

		$("#escape").on("click", function(){

			$("#t-story").fadeOut("fast");

			$("#reality").fadeIn("fast");

			return false;

		});

		$("#reality").on("click", function(){

			$("#t-story").fadeIn("fast");
			$("#reality").fadeOut("fast");

			return false;

		});

		setInterval(function(){

			newIndex = currentIndex + direction;

			if(newIndex >= loadedImages.length){
				newIndex = 0;
			} else if(newIndex < 0){
				newIndex = loadedImages.length - 1;
			}

			loadedImages[currentIndex].css("z-index", 1);

			loadedImages[newIndex].hide().css("z-index", 2)
			loadedImages[newIndex].fadeIn(1500, function(){

				loadedImages[currentIndex].hide().css("z-index", 0);

				currentIndex = newIndex;
			});

		},1700);
	}

	function startTextAnimation(){
		$("body .jumbotron .tfadeIn").each(function(i, el){
			var $el = $(el);

			setTimeout(function(){
				$el.fadeIn("fast");
			}, $el.data("delay"))
		})
	}

});