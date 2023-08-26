const img = document.querySelector("img");

img.addEventListener("click", switchTheme);

function switchTheme() {
  document.body.classList.toggle("dark-mode");

  if (!document.body.classList.contains("dark-mode")) {
    img.src = "images/sun.png";
  } else {
    img.src = "images/waning-moon.png";
  }
}
