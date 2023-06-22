/*
  document.querySelector("#btn").click(function () {});
  document.querySelector("#btn").on("click", function () {});
  */

const btn = document.querySelector("#btn");
// btn.addEventListener("click", function () {});

/*
btn.addEventListener("click", function () {
  const red = Math.trunc(Math.random() * 255);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.trunc(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;
  console.log(red, green, blue);
  document.body.style.backgroundColor = color;
});
*/

const bgColor = () => {
  const red = Math.trunc(Math.random() * 255);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.trunc(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = color;
};

btn.addEventListener("click", bgColor);
