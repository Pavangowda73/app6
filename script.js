function openFullscreen(imageElement) {
  const fullscreenView = document.getElementById("fullscreen-view");
  const fullscreenImg = document.getElementById("fullscreen-img");

  fullscreenImg.src = imageElement.src;
  fullscreenView.classList.remove("hidden");
}

function closeFullscreen() {
  const fullscreenView = document.getElementById("fullscreen-view");
  fullscreenView.classList.add("hidden");
}

function toggleMenu() {
  const menu = document.getElementById("dropdown-menu");
  menu.classList.toggle("hidden");
}