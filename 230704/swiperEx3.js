const main = document.querySelector("main");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");
console.log(footer.offsetHeight);

// const resizeMain = () => {
//   main.style.height = `${main.offsetHeight - footer.offsetHeight - nav.offsetHeight}px`;
//   console.log(main.offsetHeight);
// };
// resizeMain();

(resizeMain = () => {
  main.style.height = `${
    main.offsetHeight - footer.offsetHeight - nav.offsetHeight
  }px`;
})();

// addEventListener("resize", resizeMain);

const mySlide = new Swiper("#my-swiper", {
  autoplay: {
    delay: 2000,
  },
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    snapOnRelease: true,
    horizontalClass: "scroll-style",
  },
});

// 해당 메뉴를 클릭하면 해당 페이지 이동
// $(".global_nav a").on('click');
const menuA = document.querySelectorAll(".global_nav a");
console.log(menuA);
// .forEach((배열의 각 요소, 배열의 인덱스번호) => {실행문});
menuA.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    // .slideToLoop(슬라이드 인덱스(index), 전환속도 (speed),전환이벤트(true,false))
    mySlide.slideToLoop(idx);
    mySlide.autoplay;
  });
});
