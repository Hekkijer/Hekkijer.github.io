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
	var dots = document.getElementsByClassName("slider-dot")

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