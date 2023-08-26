const favicon = document.getElementById("favicon");
const img = document.querySelector("img");

img.addEventListener("click", switchTheme);

function switchTheme() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    favicon.setAttribute("href", "images/waning-moon.png");
    img.src = "images/sun.png";
  } else {
    favicon.setAttribute("href", "images/sun.png");
    img.src = "images/waning-moon.png";
  }
}
