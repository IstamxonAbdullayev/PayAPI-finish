var elInner = document.querySelector(".site-header__inner");
var elBtn = document.querySelector(".site-header__btn");
var elNavBtn = document.querySelector(".nav__btn");

elBtn.addEventListener("click" , function(){
  elInner.classList.add("site-header__inner--active");
})

elNavBtn.addEventListener("click" , function(){
  elInner.classList.remove("site-header__inner--active");
})

