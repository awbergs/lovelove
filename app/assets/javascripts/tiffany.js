$(document).ready(function(){


	$("#t-story").hide();


	var index = 0;

	var imageUrls = [
		//"IMG_1001.JPG",
		// "IMG_1002.JPG",
		// "IMG_1003.JPG",
		"IMG_1004.JPG",
		"IMG_1005.JPG",
		"IMG_1006.JPG",
		"IMG_1007.JPG",
		"IMG_1008.JPG",
		"IMG_1009.JPG",
		"IMG_1010.JPG",
		"IMG_1011.JPG",
		"IMG_1012.JPG",
		"IMG_1013.JPG",
		"IMG_1014.JPG",
		"IMG_1015.JPG",
		"IMG_1016.JPG",
		"IMG_1017.JPG",
		"IMG_1018.JPG",
		"IMG_1019.JPG",
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
			startAnimation();
		}

	}

	function startAnimation(){

		var $container = $("<div id='beach-animation' style='position:fixed;top:0;left:0;display:none'></div>");

		$("body").prepend($container);

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

		$("body").fadeIn("fast");

		startTextAnimation();

		var newIndex;

		setInterval(function(){

			newIndex = currentIndex + 1;

			if(newIndex >= loadedImages.length){
				newIndex = 0;
			}

			loadedImages[currentIndex].css("z-index", 1);

			loadedImages[newIndex].hide().css("z-index", 2)
			loadedImages[newIndex].fadeIn(2000, function(){

				loadedImages[currentIndex].hide().css("z-index", 0);

				currentIndex = newIndex;
			});

		},2100);
	}

	function startTextAnimation(){
		$("body .jumbotron .tfadeIn").hide().each(function(i, el){
			var $el = $(el);

			setTimeout(function(){
				$el.fadeIn("fast");
			}, $el.data("delay"))
		})
	}

});