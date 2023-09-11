
// Search Field under sub-nav > Sliding from right to center - added small delay, as I think it looks better
gsap.registerPlugin(ScrollTrigger);
const searchContainer = document.querySelector(".search-container");
gsap.set(searchContainer, { x: 2000, y: 0 });

gsap.to(".search-container", {
  x: 0,
  delay: 1,
  duration: 1.3
})

const subNav = document.querySelector(".sub-nav");

gsap.set(subNav, {x:0, y: -200,});

gsap.to(".sub-nav", {
  y:0,
  delay: 1,
  duration: 1
  

});

const featureContainer = document.querySelector(".features");
gsap.set(featureContainer, {x:0, y: -50});
gsap.set(featureContainer, {opacity:0});

gsap.to(".features", {
  y:0,
  delay: 1,
  duration: 1,
  opacity: 1
});

const adFeatures = document.querySelector(".services");
gsap.set(adFeatures, {opacity: 0});

gsap.to(".services", {
  transition: 1,
  opacity: 1,
  scrollTrigger: {
    trigger:".services",
    start: "top center",
    end: "top 60%",
  }
})

const secondFeature = document.querySelector(".second-services");
gsap.set(secondFeature, {opacity: 0});

gsap.to(".second-services", {
  transition: 1,
  opacity: 1,
  scrollTrigger: {
    trigger:".second-services",
    start: "top center",
    end: "top 60%",
  }
})
const thirdFeature = document.querySelector(".third-services");
gsap.set(thirdFeature, {opacity: 0});

gsap.to(".third-services", {
  transition: 1,
  opacity: 1,
  scrollTrigger: {
    trigger:".third-services",
    start: "top center",
    end: "top 60%",
  }
})
const fourthFeature = document.querySelector(".fourth-services");
gsap.set(fourthFeature, {opacity: 0});

gsap.to(".fourth-services", {
  transition: 1,
  opacity: 1,
  scrollTrigger: {
    trigger:".fourth-services",
    start: "top center",
    end: "top 60%",
  }
})

const insuranceOrange = document.querySelector(".insurance-orange");
gsap.set(insuranceOrange, {opacity: 0});

gsap.to(".insurance-orange", {
  transition: 1,
  opacity: 1,
  scrollTrigger: {
    trigger:".insurance-orange",
    start: "top center",
    end: "top 60%",
  }
})

const creditGreen = document.querySelector(".credit-green");
gsap.set(creditGreen, {opacity: 0});

gsap.to(".credit-green", {
  transition: 1,
  opacity: 1,
  scrollTrigger: {
    trigger:".credit-green",
    start: "top center",
    end: "top 60%",
  }
})

const diaryBlue = document.querySelector(".diary-blue");
gsap.set(diaryBlue, {opacity: 0});

gsap.to(".diary-blue", {
  transition: 1,
  opacity: 1,
  scrollTrigger: {
    trigger:".diary-blue",
    start: "top center",
    end: "top 60%",
  }
})

const newsBlue = document.querySelector(".news-blue");
gsap.set(newsBlue, {opacity: 0});

gsap.to(".news-blue", {
  transition: 1,
  opacity: 1,
  scrollTrigger: {
    trigger:".news-blue",
    start: "top center",
    end: "top 60%",
  }
})

const swiperWrapper = document.querySelector(".swiper"); // swiper carousel fade-in on scroll
gsap.set(swiperWrapper, {opacity: 0});

gsap.to(".swiper", {
  transition: 1,
  opacity: 1,
  scrollTrigger: {
    trigger:".swiper",
    start: "top center",
    end: "top 60%",
  }
})



window.addEventListener("scroll", function(){
  var subNav = document.querySelector(".sub-navbar-bg");
  subNav.classList.toggle("sticky", window.scrollY > 0);
})

var swiper = new Swiper(".mySwiper", { // users' review swiping button
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true
});
