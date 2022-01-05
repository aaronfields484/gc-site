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

