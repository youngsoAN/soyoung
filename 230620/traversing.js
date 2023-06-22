/*
  https://api.jquary.com/

  $('대상').method(); 대상의 값은 css 에서 사용되던 선택자 작성 방식과 동일

  == document.querySeletor('');
  jQuery('*'); 제이쿼리 방식으로 전체 선택자를 탐색하라
  $('#id'); 아이디 선택자 탐색
  $('.class'); 클래스 선택자 탐색
  $('#id > .class, type type'); 다중 선택자 탐색
  $('type:nth-child()');
  $('type[attribute=value]');
  $(':hover');

  .method();
  $().parent(); 직계 부모 노드 탐색
  $().parents(); 모든 부모 노드 탐색
  $().children(); 모든 직계 자식 노드 탐색
  $().siblings(); 형제 노드 탐색
  $().prev(); 바로 이전 형제 노드 탐색
  $().next(); 바로 다음 형제 노드 탐색
  $().prevAll(); 이전 형제 노드 '모두' 탐색
  $().nextAll(); 다음 형제 노드 '모두' 탐색
  $().first(); 일치하는 요소에서 첫번째 노드 탐색
  $().last(); 일치하는 요소에서 마지막 노드 탐색
  $().find(); 일치하는 하위 노드 탐색. 반드시 매개변수 작성해야 함
  $().filter(); 일치하는 노드 탐색(주로 걸러냄)
*/

// 문서 준비 이벤트 addEventListner('DOMContentLoaded', function () {});
// $(document).ready(function () {});

$(document).ready(function () {
  // == .style.backgroundColor
  // $().css({'속성':'값', '속성':'값'});
  $("body").css({ "background-color": "#efefef" });
  $("body *").css({ border: "3px solid #999", padding: "10px", margin: 10 });

  $("a").parent(); // a의 직계 부모(li)를 탐색해라
  // method chaining 여러개의 메서드 연결
  $("a").parent().css({ "border-color": "red" });
  // $("a").css({ "border-color": "red" }).parent(); a에 css를 적용한 뒤 부모 탐색

  // $("a").parents().css({ "border-style": "dotted" }); 매개변수를 작성하지 않으면 a의 상위 노드 모두 탐색. 즉 body, html도 탐색
  $("a").parents("#wrapper").css({ "border-style": "dotted" });

  // $(".container").children().css({ "border-color": "#000" }); // 자식 노드를 탐색. 매개변수를 지정하지 않으면 같은 라인의 모든 직계 노드 탐색
  $(".container").children("h1").css({ "border-color": "#000" });

  $("li.part").siblings(); // li.part의 형제 관계 탐색
  $("li.part").siblings().css({ backgroundColor: "lightblue" });
  // $("li.part").siblings("li:last-child").children('a:first-child').css({ borderStyle: "dashed" });

  // .first(); 자식인 a들 중에 첫번째 탐색한 노드 반환
  $("li.part")
    .siblings("li:last-child")
    .children()
    .first()
    .css({ borderStyle: "dashed", textDecoration: "none", color: "red" });

  $(".p2").prev(); // .p2의 앞에 작성된 형제 노드 탐색
  $(".p2").prev().css({ backgroundColor: "salmon" });

  $(".p2").next(); // .p2의 뒤에 작성된 형제 노드 탐색
  $(".p2").next().css({ backgroundColor: "orange" });

  $(".p2").prevAll(); // .p2의 앞에 작성된 형제 노드 *전부* 탐색
  $(".p2").prevAll().css({ border: "6px groove #999" });

  // text4 탐색
  // 내가 한것
  /*
  $("#header")
    .siblings("ul")
    .children("li:last-child")
    .children("a:last-child")
    .css({
      color: "blue",
      textDecoration: "none",
      backgroundColor: "pink"
    });
    */

  // 이런것도 됨 .find('a:last-child'); ul의 하위 노드 중 a:last-child 탐색. 반드시 *매개변수* 필요
  $("#header").siblings("ul").find("a:last-child").css({
    color: "blue",
    textDecoration: "none",
    backgroundColor: "pink",
  });

  $("#header").find("p").css({ backgroundColor: "teal" });

  $(".part").filter("ul"); // .part중 ul 탐색
  $(".part").filter("li").css({ listStyle: "none" });

  $("div").filter("#header").children().css({ color: "tomato" });
});
