const gmenu = document.getElementById("gmenu");
const plusbtn = document.getElementById("btn");
const fav = document.getElementById("favbtn");

  btn.addEventListener("click", () => {
    gmenu.classList.toggle("active");
    gmenu.classList.toggle("open");
  });

  favbtn.addEventListener("click", () => {
    if (favbtn.getAttribute("name") === "bookmark-outline") {
      favbtn.setAttribute("name", "bookmark");
    } else {
      favbtn.setAttribute("name", "bookmark-outline");
    }
  });