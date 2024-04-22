// AOS
AOS.init({
    once: true,
    disable: 'phone',
    duration: 1000,
    easing: 'ease-out-cubic',
});

// Cards
let cards = document.querySelectorAll('.banner-card');

cards.forEach(card => {

    card.onmousemove = function(e) {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;
        
        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");
    } 

});

// particles.js
const particles_settings = {
  "particles": {
    "number": {
      "value": 216,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 71.85055085422323,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 11.975091809037204,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 15.96678907871627,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

const particles_duplicity = ['particles-js', 'particles-js2']
particles_duplicity.forEach(particle => {
    particlesJS(particle, particles_settings);
})

// swiper.js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
