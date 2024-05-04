let searchForm=document.querySelector('.searchform');
document.querySelector('#search-btn').onclick=()=>
{
    searchForm.classList.toggle('active');
    Cart.classList.remove('active');
    Account.classList.remove('active');
    navbar.classList.remove('active');
}
let Cart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=()=>
{
    Cart.classList.toggle('active');
    searchForm.classList.remove('active');
    Account.classList.remove('active');
    navbar.classList.remove('active');
    
}
let Account=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>
{
    Account.classList.toggle('active');
    Cart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>
{
    navbar.classList.toggle('active');
    Account.classList.remove('active');
    Cart.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll=()=>
{
    searchForm.classList.remove('active');
    Cart.classList.remove('active');
    Account.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
        768: {
        slidesPerView: 2,
   
      },
      1020: {
        slidesPerView: 3,

      },
    },
  });