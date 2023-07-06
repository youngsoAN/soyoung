/*
  event.target
    실제 이벤트가 발생하는 대상 반환. 이벤트 리스너가 등록되어 있는 자식 요소 반환

  event.currentTarget
    이벤트 리스너가 있는 대상 반환. 이벤트로 등록해놓은 요소(일반적으로는 버튼)
*/
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const link = document.querySelector("a");

// box1에 이벤트 binding
box1.addEventListener("click", (evt) => {
  console.log(`target -> ${evt.target.tagName}`);
  console.log(`currentTarget -> ${evt.currentTarget.tagName}`);
});
/*
  box1 클릭 :target -> 실제 클릭한 노드 div, currentTarget -> 버튼으로 등록된 노드 div
  txt1 클릭 :target -> 실제 클릭한 노드 h3, currentTarget -> 버튼으로 등록된 노드 div
  txt2 클릭 :target -> p, currentTarget -> div
*/

box2.addEventListener("click", (e) => {
  e.preventDefault(); // 노드가 가진 기본 성격을 제거

  console.log(`target -> ${evt.target.tagName.toLowerCase()}`);
  console.log(`currentTarget -> ${evt.currentTarget.tagName.toLowerCase()}`);
  e.target.style.backgroundColor = "tomato";
  const target = e.target;
  target.style.borderColor = "tomato";
});
/*
  이벤트 바인딩한 요소는 box2
  a 클릭: target -> 실제 클릭한 노드 a, currentTarget -> 버튼으로 등록된 노드 div
  li 클릭: target -> 실제 클릭한 노드 li, currentTarget -> 버튼으로 등록된 노드 div

a.addEventListener()
li.addEventListener()
ul.addEventListener()
div.addEventListener()

*/
