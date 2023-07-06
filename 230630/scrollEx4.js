// 스크롤에 따른 nav 변화
$(window).on("scroll", () => {
  const slideBox = $("#slide_box").offset().top;
  console.log(slideBox);

  if (scrollY > slideBox) {
    $("nav").addClass("active");
    $("#global_nav").css({ top: 80 });
  } else {
    $("nav").removeClass("active");
    $("#global_nav").css({ top: 150 });
  }
});
// 로고 클릭시 맨 위로 이동
$(".title_logo").on("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 이것도 됨
// $(".title_logo").on("click", () => {
//   $("html,body").animate(
//     {
//       scrollTop: 0,
//     },
//     "smooth"
//   );
// });

// 해당 박스로 부드러운 이동
// array.forEach((element) => {});
// .each(function(index){}); 각 요소에 함수 각각 적용. 함수에 매개변수를 작성하면 index를 의미

// $("#global_nav li:nth-child(0) a").on("click", () => {});
$("#global_nav a").each(function (idx) {
  // function 함수 사용시 this 키워드는 내가 클릭한 그 a
  $(this).on("click", function (e) {
    e.preventDefault();

    const getArticle = $("article").eq(idx).offset().top - 80; // 80: nav 높이
    scrollTo({
      top: getArticle,
      behavior: "smooth",
    });
  });
});

// 모바일 토글버튼
$("#toggle_btn").on("click", function () {
  // function 함수 사용시 this 키워드가 지칭하는 대상은 클릭한 바로 그 #toggle_btn
  $(this).toggleClass("closeMenu");
  $("#global_nav").toggleClass("showMenu");
});

// 해당 메뉴 클릭시 닫힘
$("#global_nav li").each(function () {
  // this 키워드가 지칭하는 대상은 클릭한 그 li
  $(this).on("click", function () {
    $(this).removeClass("closeMenu");
    $("#global_nav").removeClass("showMenu");
  });
});
