const btnSwitch = document.querySelector("#swicth");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
});

console.log("btn");
