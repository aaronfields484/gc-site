let prevY;
let navbar = document.getElementById('navbar');

//Navbar appearance fluctuates based on users scroll position
function navScroll(){

    //Finds the window's current scroll
    let y = window.scrollY;

    //Sees if the user has scrolled up to display navbar
    if(y < (prevY-5)){

        //
        if(y > 300){

            navbar.classList.add('navbar-background');
        }
        else {

            navbar.classList.remove('navbar-background');
        }
        navbar.style.display = 'unset';
        prevY = window.scrollY;
    }

    //Sees if user's scroll is greater than 300px to display transparent navbar 
    else if(y > 300){

        navbar.style.display = 'none';
        navbar.classList.remove('navbar-background');
        prevY = window.scrollY;
    }
    
    else{

        navbar.style.display = 'unset';
        prevY = 0;
    }

}

window.addEventListener('scroll', navScroll);

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

/*	about gallery */

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

	        	if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		    }
		    	$(this).addClass("active");
	    	});
});


function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});

/*	end about gallery */