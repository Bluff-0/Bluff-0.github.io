/* Constant Definition */
const SectionTwoOffset = $('#contact').offset().top;

/* Variable Definition */

/* Object Definition */
var particalConfiguration = {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.7,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
}

var owlCarouselObject = {
    loop: false,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        1280: {
            items: 2
        }
    }
}
/* Function Definition */

const redirectTo = (url) => {
    window.location.href = url;
}

const shapeContactCards = (itemsInColumn) => {
    let contactCards = document.querySelector('.contact-cards-container').children;
    for (let items of contactCards) items.className = `col-sm-${12 / itemsInColumn}`;
}

/* Data Rendering */

particlesJS("particles-js", particalConfiguration);

shapeContactCards(screen.width <= 1600 ? 2 : 3);

$(window).scroll(() => {
    var windscroll = $(this).scrollTop();
    if (windscroll >= 100 && screen.width > 1280) 
    {
        $('nav').addClass('bg-dark');

    }
    else if(windscroll <= 100 && screen.width > 1280)
    {

        $('nav').removeClass('bg-dark');
    }
    if(windscroll > SectionTwoOffset) {
        $(".connect").addClass("active");
        $(".brief").removeClass("active");
    }
    else {
        $(".brief").addClass("active");
        $(".connect").removeClass("active");
    }
}).scroll()

$('.owl-carousel').owlCarousel(owlCarouselObject);

if(screen.width<1280)
{
    // document.getElementsByTagName('body')[0].innerHTML= "<h2>What did it Cost? <br> Everything!</h2>"+
    // "<br><br><br> <h1>I need some time to create mobile compatible website. Use your laptop till then to stalk me.</h1>"; 
    let navigation= document.getElementById('particles-js').children[0];
    navigation.classList.add('bg-dark');
}