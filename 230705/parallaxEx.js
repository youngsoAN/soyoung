// 요소가 가지고 있는 기본 이벤트 제거
// $(document).on('click', 'a[href="#"]', (evt)=> evt.preventDefault());
$('a[href="#"]').on("click", (evt) => {
  evt.preventDefault();
});

// 각 박스 안에 움직이는 이미지
const movingImg = (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  $(".box2-left").css({ left: -200 - x / 60, top: 70 - y / 30 });
  $(".box2-right").css({ right: -50 + x / 30, bottom: -50 + y / 60 });

  $(".box3-left").css({ left: -200 - x / 60, top: 70 - y / 40 });
  $(".box3-right").css({ right: -50 + x / 60, bottom: -50 - y / 30 });

  $(".box4-left").css({ left: -200 - x / 60, top: 70 - y / 30 });
  $(".box4-right").css({ right: -50 + x / 50, bottom: -50 - y / 60 });

  requestAnimationFrame(movingImg);
};

$(".box").on("mousemove", movingImg);

// 첫번째 박스를 지나면 로고 컬러 바뀜
$(window).on("scroll", function () {
  const box2 = $(".box2").offset().top;
  console.log(box2);

  // if(scrollY > box2) {
  //   $('header').addClass('colorChange');
  // } else {
  //   $('header').removeClass('colorChange');
  // }

  $("header").toggleClass("colorChange", scrollY > box2);

  // 해당 박스로 이동하면 내비 메뉴에 .active 붙음
  const idx = Math.floor(scrollY / $(window).height());
  console.log(idx);

  // $('.global-nav li a').removeClass('active');
  // $('.global-nav li').eq(idx).find('a').addClass('active');
  $(".global-nav li a").removeClass("active").eq(idx).addClass("active");
});

// 내비 메뉴 클릭시 해당 박스로 부드럽게 이동
$(".global-nav li").on("click", function () {
  // this 키워드는 내가 클릭한 그 li
  const idx = $(this).index();
  const currentBox = $(window).height() * idx;
  console.log(currentBox);

  // scrollTo({
  //   top: currentBox,
  //   behavior: 'smooth'
  // });

  $("html, body").stop().animate({ scrollTop: currentBox }, 800);
});

// 마우스 휠 이벤트
$(".box").each(function () {
  // this 키워드 : 각 박스
  $(this).on("wheel", function (evt) {
    evt.preventDefault(); // 스크롤바 기본 성격 제거

    let delta = evt.originalEvent.deltaY;
    let currentTop = null;
    const nextBox = this.nextElementSibling;
    // const nextBox = (this.prev()[0];
    const prevBox = this.previousElementSibling;

    if (delta > 0) {
      // 휠을 내렸을때
      if (nextBox) {
        currentTop = nextBox.offsetTop;
      } else {
        // return; 다음 박스의 값이 없는 경우 벗어남. 멈춤
        currentTop = this.offsetTop; // 다음박스의 값이 없는 경우 현재 박스의 높이를 반환하기 때문에 멈춤
      }
    } else {
      // 휠을 올렸을때
      if (prevBox) {
        currentTop = prevBox.offsetTop;
      } else {
        // currentTop = 0; 첫번째 박스에 도달하면 높이값 0 으로 반환하기 때문에 첫번째 박스에서 멈춤
        return;
      }
    }

    scrollTo({
      top: currentTop,
      behavior: "smooth",
    });
  });
});
