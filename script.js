var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right= "0";
}
function hideMenu(){
    navLinks.style.right= "-240px";
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: true,
    grabCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        500: {
            slidesPerView: 1,
        },
        720: { 
            slidesPerView:  2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
  })

  
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;   
        let offset = sec.offsetTop - 400;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }else{
            sec.classList.remove('show-animate');
        }
    })
}