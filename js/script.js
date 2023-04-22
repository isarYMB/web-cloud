
/*Navigasi Scroll*/
$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('turun');
    }
    else{
        $('nav').removeClass('turun');
    }
    })

/*Navigasi Active */
window.addEventListener('scroll', event => {
    let navigationLinks = document.querySelectorAll
    ('nav ul li a');
    let fromTop = window.scrollY;

    navigationLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active')
        }
    })
});

/*Naviasi Smooth Scroll*/
$(document).ready(function(){
    $('.hv1, .button1').click(function(e){
        var linkHref = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(linkHref).offset().top
    }, 1000);

    e.preventDefault();
    })
});

/*Slide Navbar Mobile*/
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});



