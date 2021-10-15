window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

const navbar = document.getElementById("myNavbar");
navbar.addEventListener("click", event => {
    if (event.target.innerText == 'About' || event.target.innerText == 'Blaire Grant') {
        document.getElementById("about").scrollIntoView();
    }
    if (event.target.innerText == 'Skills') {
        document.getElementById("skills").scrollIntoView();
    }
    if (event.target.innerText == 'Projects') {
        document.getElementById("projects").scrollIntoView();
    }
    if (event.target.innerText == 'Contact Info') {
        document.getElementById("contact").scrollIntoView();  
    }
});

var link = document.getElementById("back-to-top");
var amountScrolled = 250;

window.addEventListener('scroll', function(e) {
    if ( window.pageYOffset > amountScrolled ) {
        link.classList.add('show');
    } else {
        link.className = 'back-to-top';
    }
});  

link.addEventListener('click', function(e) {
    e.preventDefault();

    var distance = 0 - window.pageYOffset;
    var increments = distance/(500/16);
    function animateScroll() {
        window.scrollBy(0, increments);
        if (window.pageYOffset <= document.body.offsetTop) {
            clearInterval(runAnimation);
        }
    };
    // Loop the animation function
    var runAnimation = setInterval(animateScroll, 16);
});