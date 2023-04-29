function myFunction(){

//nav monn section
const navSectionBG=document.querySelector('.nav--wrapper')
  navSectionBG.classList.toggle('show')


  //body section moon mode

  let darkmoon=document.body;
  darkmoon.classList.toggle('dark-mode');
  //logo moon mode
  const logoColor=document.querySelector('.logo h3')
 logoColor.classList.toggle('logoshow')



}

let SearchForm=
document.querySelector(".login--form");

document.querySelector("#login-btn").onclick =()=>{
  SearchForm.classList.toggle('active');
  MenuCart.classList.remove('active2');
}

let MenuCart=
document.querySelector(".menu--cart");

document.querySelector("#menu--cart").onclick =()=>{
  MenuCart.classList.toggle('active2');
  SearchForm.classList.remove('active');

}
/*our packages swipper slide*/

/*swiper */
var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween:30,
  centereSlides:true,
  autoplay:{
    delay:500,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//blog swippper
var swiper = new Swiper(".blog-swiper", {
  loop:true,
  spaceBetween:30,
  centereSlides:true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



//aos

AOS.init({
  offset:200,
delay:100,
duration:400,
easing:'ease',
once:false,
mirror:false,
achorPlacement:'top-bottom',


})