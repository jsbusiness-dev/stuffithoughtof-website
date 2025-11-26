const triggerElement = document.getElementById('trigger-element');

document.addEventListener('scroll', () => {
  const elementBottom = triggerElement.offsetTop + triggerElement.offsetHeight;

  if (window.scrollY > elementBottom) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

const sidebar = document.getElementById("sidebar");
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
});