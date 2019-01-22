// Menu Options //

//open
function openNav() {
	document.getElementById("myNav").style.width = "100%";
  }

//close  
function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  }



// Modal //

//open
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

//close
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
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


// Add To Cart Counter //

var add = (function () {
  var counter = 0;
  return function () {return counter += 1;}
})();

function addCart() {
  document.getElementById("cart").innerHTML = add();
}