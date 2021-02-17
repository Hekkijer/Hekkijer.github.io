/* Slider */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slider-item");
	var dots = document.getElementsByClassName("slider-dot");

	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";

}

// Slider buttons mouseover
var prev = document.getElementById("slider-prev");
var next = document.getElementById("slider-next");


prev.addEventListener("mouseover", function(){
  prev.src="assets/img/hover-left-arrow.svg";
});
prev.addEventListener("mouseout", function(){
  prev.src="assets/img/slider-left-arrow.svg"
});

next.addEventListener("mouseover", function(){
  next.src="assets/img/hover-right-arrow.svg";
});
next.addEventListener("mouseout", function(){
  next.src="assets/img/slider-right-arrow.svg"
});


// Slider buttons onclick
prev.addEventListener("click", function(){plusSlides(-1);});
next.addEventListener("click", function(){plusSlides(1);});


// Slider dots onclick
var dots = document.getElementsByClassName("slider-dot");
dots[0].addEventListener("click", function(){currentSlide(1);});
dots[1].addEventListener("click", function(){currentSlide(2);});
dots[2].addEventListener("click", function(){currentSlide(3);});
dots[3].addEventListener("click", function(){currentSlide(4);});
dots[4].addEventListener("click", function(){currentSlide(5);});

// Iframe adding//
var iframe = document.createElement("iframe");
iframe.className = "video-iframe";

iframe.setAttribute("src",
	"https://www.youtube.com/embed/0yNk8I-Yno4?autoplay=1&mute=1");

function AddVideo() {
	document.getElementById("container").setAttribute
	("style","display: none;");

	document.getElementById("video").appendChild(iframe);
	iframe.style.width = "100%";
	iframe.style.height = "704px";
}

// Iframe button onclick
var video_button = document.getElementById("video-button");

video_button.addEventListener("click", AddVideo);

// Deedle Doo

// document.getElementById("1").onclick = function() {
// 	alert("Beeb");
// }