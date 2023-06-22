/* 대메뉴에 마우스를 올리면, 소메뉴가 내려옴
$(".global_nav"); // 영역 하나만 탐색

$(".global_nav > li > a").on("mouseenter", () => {
  $("nav .global_nav .sub_nav").slideDown();
});
$(".global_nav > li > a").on("mouseout", () => {
  $("nav .global_nav .sub_nav").slideUp();
});


$(".global_nav > li > a").on({
  mouseenter: () => {
    $("nav .global_nav .sub_nav").slideDown();
  },
  mouseleave: () => {
    $("nav .global_nav .sub_nav").slideUp();
  },
});
*/
$(".global_nav > li > a").hover(
  () => {
    $("nav .global_nav .sub_nav").stop().slideDown();
  },
  () => {
    $("nav .global_nav .sub_nav").stop().slideUp();
  }
);
