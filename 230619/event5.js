/*
window를 다 불러왔을 때. 이미지나 영상을 기다림
window.onload = function () {};
window.addEventListener("load", () => {});

DOM을 다 불러왔을 때. 이미지나 영상을 기다림
document.addEventListener("load", () => {});
*/

// 다른 외부 구조, 노드 상관없이 DOM만 불러오면 실행. 이미지나 영상을 기다리지 않음
document.addEventListener("DOMContentLoaded", () => {
  const dts = document.querySelectorAll("dt");
  console.log(dts);

  /*
  dts[0].style.color = "green";
  dts[0].style.fontWeight = "bold";
  dts[1].style.color = "green";
  dts[1].style.fontWeight = "bold";
  */

  dts.forEach((dt) => {
    // 유사배열이 가지고 있는 요소의 수만큼 적용
    // forEach((dt) <- 여기에 나온dt는 내가 붙인 매개변수 이름임
    dt.style.fontWeight = "bold";
    dt.style.color = "green";
  });

  const lis = document.querySelectorAll("#event1 > li");
  console.log(lis);

  lis.forEach((item) => {
    item.style.backgroundColor = "lightblue";
    item.style.margin = "10px 0";
    item.style.lineHeight = 1.6;
  });

  document
    .querySelector("ol > li")
    .addEventListener("click", () => alert("클릭했습니다"));

  const btn2 = document.querySelector("#event1 >li:nth-child(2)");
  const btn3 = document.querySelector("#event1 >li:nth-child(3)");
  const btn4 = document.querySelector("#event1 >li:nth-child(4)");
  const btn5 = document.querySelector("#event1 >li:nth-child(5)");
  const btn6 = document.querySelector("#event1 >li:nth-child(6)");
  const btn7 = document.querySelector("#event1 >li:nth-child(7)");

  btn2.addEventListener("dblclick", () => alert("더블클릭 했습니다."));
  /*
  btn3.addEventListener("mousemove", () =>
    console.log("마우스가 움직였습니다")
  );
  */
  btn4.addEventListener("mousedown", () => alert("눌렀습니다."));
  btn5.addEventListener("mouseup", () => alert("뗐습니다."));

  btn6.addEventListener(
    "mouseover",
    () => (btn6.style.backgroundColor = "orange")
  );
  btn7.addEventListener(
    "mouseout",
    () => (btn7.style.backgroundColor = "salmon")
  );
});
