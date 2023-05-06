const menuToggle = document.querySelector('.menu-toggle')
const dropContainer = document.querySelector('.menu__ham')

const menusArrow = document.querySelectorAll('.arrowButton');
const sliderCarrousel = document.querySelector('.slider-carrousel')

const toast = document.querySelector('.toast');

const newsLetter = document.querySelector('.section__newsletter_form');
const count = 0;

let activeToast = false;


const closeToast = (e) => {
  toast.classList.remove('toast__actived');
}

menuToggle.addEventListener('click', (e) => {
  dropContainer.classList.toggle('menu__ham__actived')
})

const menuToggle1 = document.querySelector('.menu-toggle');
const dropContainer1 = document.querySelector('.dp-menu');

// ativa o menu dropdown
menuToggle1.addEventListener('click', (e) => {
    dropContainer1.classList.toggle('dp-menu__actived')
})


menusArrow.forEach((menu) => {
  menu.addEventListener('click', (e) => {
    if(e.currentTarget.getAttribute('aria-details') === 'left-arrow') {
      e.preventDefault();
      sliderCarrousel.scrollLeft -= sliderCarrousel.offsetWidth;
    } else {
      e.preventDefault();
      sliderCarrousel.scrollLeft += sliderCarrousel.offsetWidth;
    }
  })
})

menusArrow.forEach((menu) => {
  menu.addEventListener('click', (e) => {
    if(e.currentTarget.getAttribute('aria-details') === 'right-arrow') {
      e.preventDefault();
      sliderCarrousel.scrollLeft -= sliderCarrousel.offsetWidth;
    } else {
      e.preventDefault();
      sliderCarrousel.scrollLeft += sliderCarrousel.offsetWidth;
    }
  })
})


newsLetter.addEventListener('submit', (e) => {
  e.preventDefault();
  handleActiveToast('*** Obrigado por ter Enviado! Agora Você faz parte da nossa Comunidade ***');
})


const handleActiveToast = (text) => {
  toast.classList.toggle('toast__actived');

  toast.innerText = `${text}`;

  setTimeout(() => {
    toast.classList.remove('toast__actived')
   }, 2000);
}


