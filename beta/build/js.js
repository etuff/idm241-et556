const gmenu = document.getElementById("gmenu");
const plusbtn = document.getElementById("btn");
const fav = document.getElementById("favbtn");

  btn.addEventListener("click", () => {
    gmenu.classList.toggle("active");
    gmenu.classList.toggle("open");
  });

favbtn.addEventListener("click", () => {

  // Instantly hide (no fade-out)
  favbtn.style.transition = "none";
  favbtn.style.opacity = "0";

  // Swap icon immediately
  if (favbtn.getAttribute("name") === "bookmark-outline") {
    favbtn.setAttribute("name", "bookmark");
  } else {
    favbtn.setAttribute("name", "bookmark-outline");
  }

  // Then fade IN
  setTimeout(() => {
    favbtn.style.transition = "opacity 0.5s ease-in-out";
    favbtn.style.opacity = "1";
  }, 10); 
});



  // share button animation
  const likeButton = document.getElementById('shareicon');

  likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('active');
});



const cardfull = document.querySelector('.cardfull');
const flips = document.querySelectorAll('.cflip');

flips.forEach(flip => {
  flip.addEventListener('click', () => {
    cardfull.classList.toggle('flipped');
  });
});


