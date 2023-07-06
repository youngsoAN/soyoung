// $(".slide_wrapper .slide_item").eq(0).

let current = 0;
let total = $(".slide_wrapper .slide_item").length;

const slide = (item, idx) => {
  // item: next, prev / idx: current
  let i = current;

  if (idx > total) {
    // 첫화면
    i = 0;
    current = 0;
  } else if (idx < 0) {
    // 마지막 화면
    i = total - 1;
    current = total - 1;
  }

  $(".slide_wrapper .slide_item").removeClass("active");
  $(".slide_wrapper .slide_item").eq(i).addClass("active");
};

const autoSlide = () => {
  let next = current;
  current = current + 1;
  slide(next, current);
};

// 넥스트 버튼 클릭시 슬라이드
$("#nextBtn").on("click", autoSlide);

$("#prevBtn").on("click", () => {
  let prev = current; // 현재 위치 인덱스
  current = current - 1; // 이전 위치 인덱스
  slide(prev, current);
});

setInterval(autoSlide, 3000);
