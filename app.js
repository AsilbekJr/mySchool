 /* Swiper */
 var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* Swiper end */


const hamburger = document.querySelector(".hamburger");
const line = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  line[0].classList.toggle("clicked");
  line[1].classList.toggle("clicked");
  line[2].classList.toggle("clicked");
});

const mainItem = document.querySelector(".main-items");
const itemLength = document.querySelectorAll(".item").length;

let intervals = 0;

function interval() {
  setInterval(() => {
    intervals++;
    if (intervals > itemLength - 1) {
      intervals = 0;
    }
    mainItem.style.transform = "translateX(" + intervals * -25 + "%)";
  }, 6000);
}
interval();

const mainBtn = document.querySelector(".btn_main");
const about_us = document.querySelector(".about_us");
const main_menu = document.querySelector(".main_menu");
const closeBtn = document.querySelector(".closeBtn");
mainBtn.addEventListener("click", () => {
  about_us.classList.add("active");
  main_menu.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  about_us.classList.remove("active");
  main_menu.style.display = "block";
});

let news = [
  {
    id: 0,
    title: "Yangi kitblar tarqatildi.",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
    velit cum, explicabo sequi nulla suscipit cumque id culpa deserunt
    tempore repellat voluptas labore tenetur, incidunt exercitationem
    porro optio debitis dolore. Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Commodi velit cum, explicabo sequi nulla suscipit
    cumque id culpa deserunt tempore repellat voluptas labore tenetur,
    incidunt exercitationem porro optio debitis dolore. Lorem, ipsum dolor
    sit amet consectetur adipisicing elit. Commodi velit cum, explicabo
    sequi nulla suscipit cumque id culpa deserunt tempore repellat
    voluptas labore tenetur, incidunt exercitationem porro optio debitis
    dolore.`,
    data: "10.10.2021",
    clock: "20:10",
    img: `1.jpg`,
  },
  {
    id: 1,
    title: "Boshlang'ich sinflar bilim sifati tekshirildi",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
    velit cum, explicabo sequi nulla suscipit cumque id culpa deserunt
    tempore repellat voluptas labore tenetur, incidunt exercitationem
    porro optio debitis dolore. Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Commodi velit cum, explicabo sequi nulla suscipit
    cumque id culpa deserunt tempore repellat voluptas labore tenetur,
    incidunt exercitationem porro optio debitis dolore. Lorem, ipsum dolor
    sit amet consectetur adipisicing elit. Commodi velit cum, explicabo
    sequi nulla suscipit cumque id culpa deserunt tempore repellat
    voluptas labore tenetur, incidunt exercitationem porro optio debitis
    dolore.`,
    data: "09.10.2021",
    clock: "19:12",
    img: `2.jpg`,
  },
  {
    id: 2,
    title: "1-sinfga qabul qilinganlarga prezident sovg'asi topshirildi",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
    velit cum, explicabo sequi nulla suscipit cumque id culpa deserunt
    tempore repellat voluptas labore tenetur, incidunt exercitationem
    porro optio debitis dolore. Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Commodi velit cum, explicabo sequi nulla suscipit
    cumque id culpa deserunt tempore repellat voluptas labore tenetur,
    incidunt exercitationem porro optio debitis dolore. Lorem, ipsum dolor
    sit amet consectetur adipisicing elit. Commodi velit cum, explicabo
    sequi nulla suscipit cumque id culpa deserunt tempore repellat
    voluptas labore tenetur, incidunt exercitationem porro optio debitis
    dolore.`,
    data: "08.10.2021",
    clock: "12:21",
    img: `3.jpg`,
  },
  {
    id: 3,
    title: "Maktabimiz yangi binosi foydalanishga topshirildi",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
    velit cum, explicabo sequi nulla suscipit cumque id culpa deserunt
    tempore repellat voluptas labore tenetur, incidunt exercitationem
    porro optio debitis dolore. Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Commodi velit cum, explicabo sequi nulla suscipit
    cumque id culpa deserunt tempore repellat voluptas labore tenetur,
    incidunt exercitationem porro optio debitis dolore. Lorem, ipsum dolor
    sit amet consectetur adipisicing elit. Commodi velit cum, explicabo
    sequi nulla suscipit cumque id culpa deserunt tempore repellat
    voluptas labore tenetur, incidunt exercitationem porro optio debitis
    dolore.`,
    data: "07.10.2021",
    clock: "7:12",
    img: `4.jpg`,
  },
  {
    id: 4,
    title: "Matematika fani bo'yicha o'tkazilgan bellashuv g'oliblari taqdirlandi",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
    velit cum, explicabo sequi nulla suscipit cumque id culpa deserunt
    tempore repellat voluptas labore tenetur, incidunt exercitationem
    porro optio debitis dolore. Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Commodi velit cum, explicabo sequi nulla suscipit
    cumque id culpa deserunt tempore repellat voluptas labore tenetur,
    incidunt exercitationem porro optio debitis dolore. Lorem, ipsum dolor
    sit amet consectetur adipisicing elit. Commodi velit cum, explicabo
    sequi nulla suscipit cumque id culpa deserunt tempore repellat
    voluptas labore tenetur, incidunt exercitationem porro optio debitis
    dolore.`,
    data: "06.10.2021",
    clock: "12:23",
    img: `5.jpg`,
  },
  {
    id: 5,
    title: "Yangi kitblar tarqatildi.",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
    velit cum, explicabo sequi nulla suscipit cumque id culpa deserunt
    tempore repellat voluptas labore tenetur, incidunt exercitationem
    porro optio debitis dolore. Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Commodi velit cum, explicabo sequi nulla suscipit
    cumque id culpa deserunt tempore repellat voluptas labore tenetur,
    incidunt exercitationem porro optio debitis dolore. Lorem, ipsum dolor
    sit amet consectetur adipisicing elit. Commodi velit cum, explicabo
    sequi nulla suscipit cumque id culpa deserunt tempore repellat
    voluptas labore tenetur, incidunt exercitationem porro optio debitis
    dolore.`,
    data: "05.10.2021",
    clock: "9:28",
    img: `6.jpg`,
  },
  {
    id: 6,
    title: "Davlat bayrog'i qabul qilingan kunga bag'ishlab tadbir tashkil etildi.",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
    velit cum, explicabo sequi nulla suscipit cumque id culpa deserunt
    tempore repellat voluptas labore tenetur, incidunt exercitationem
    porro optio debitis dolore. Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Commodi velit cum, explicabo sequi nulla suscipit
    cumque id culpa deserunt tempore repellat voluptas labore tenetur,
    incidunt exercitationem porro optio debitis dolore. Lorem, ipsum dolor
    sit amet consectetur adipisicing elit. Commodi velit cum, explicabo
    sequi nulla suscipit cumque id culpa deserunt tempore repellat
    voluptas labore tenetur, incidunt exercitationem porro optio debitis
    dolore.`,
    data: "18.11.2021",
    clock: "14:28",
    img: `7.jpg`,
  },
];
const lastNews = document.querySelector('.last_news');
const i_clock = document.querySelector(".i-clock");
const i_data = document.querySelector(".i-data");
const i_img = document.querySelector(".i-img");
const i_title = document.querySelector(".i-news-title");




 news.forEach((it) => {
    

    const newsItem = document.createElement('a');
    newsItem.classList.add('news_item');
    newsItem.innerHTML = `
  <div class="news_img">
    <img
      class="i_img"
      src="/img/${it.img}"
      alt=""
    />
  </div>
  <div class="news_info">
    <div class="data_section">
      <i class="far fa-calendar-alt"></i>
      <div class="i-clock">${it.clock}</div>
      <div class="i-date">${it.data}</div>
    </div>
    <div class="i-news_title">${it.title}</div>
  </div>
  `

  lastNews.appendChild(newsItem); 
  const hr = document.createAttribute('href');
  hr.value = '#news';
  newsItem.setAttributeNode(hr);
  });


  const newsItem = document.querySelectorAll('.news_item');
  const mainClock = document.querySelector('.clock');
  const mainData = document.querySelector('.date');
  const mainNewsTitle = document.querySelector('.news_title');
  const mainNewsText = document.querySelector('.news_text');
  const mainImg = document.querySelector('.main_img');



  for(let i = 0; i <= newsItem.length; i++){
    newsItem[i].addEventListener('click',() => {
      mainClock.textContent = news[i].clock;
      mainData.textContent = news[i].data;
      mainNewsTitle.textContent = news[i].title;
      mainNewsText.textContent = news[i].text;
      mainImg.src = `img/${news[i].img}` 
    })
 }
  


 
 