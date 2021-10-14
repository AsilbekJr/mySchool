const hamburger = document.querySelector(".hamburger");
const line = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  line[0].classList.toggle("clicked");
  line[1].classList.toggle("clicked");
  line[2].classList.toggle("clicked");
});


const mainItem = document.querySelector(".main-items");
const itemLength = document.querySelectorAll('.item').length;

let intervals = 0;

  function interval(){
    setInterval(() => {
    intervals++;
    if(intervals > ( itemLength - 1)){
      intervals = 0;
    }
     mainItem.style.transform = "translateX(" + intervals * -25 + "%)";
   },6000)
}
  interval()

const mainBtn = document.querySelector('.btn_main');
const about_us = document.querySelector('.about_us');
const main_menu = document.querySelector('.main_menu');
const closeBtn = document.querySelector('.closeBtn');
mainBtn.addEventListener('click', () => {
  about_us.classList.add('active');
  main_menu.style.display = 'none';
});
closeBtn.addEventListener('click',() => {
  about_us.classList.remove('active');
  main_menu.style.display = 'block';
})


