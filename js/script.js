var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){

	showSlides( slideIndex += n);

}

function curentSlide(n){
	showSlides( slideIndex = n);
}


function showSlides(n){
	var i;
	var slides = document.getElementsByClassName('myslides');
	var dots = document.getElementsByClassName('dot');
	console.log("hello");
	if(n > slides.length){
		slideIndex = 1;
		console.log("A");
	}
	if( n < 1){
		slideIndex = slides.length;
		console.log("B");
	}

	for(i=0; i< slides.length; i++){
		slides[i].style.display= "none"
	}

	for(i=0; i < slides.length ; i++){
	 	dots[i].className = dots[i].className.replace(" active" , "")
	}

	slides[slideIndex -1].style.display = "block";
	dots[slideIndex - 1].className += " active";



}

