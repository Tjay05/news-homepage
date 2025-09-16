const hBurger = document.getElementById('hamburger');
const offCanvas = document.getElementById('offside-canvas');

hBurger.addEventListener('click', function () {
  if (offCanvas.className === 'hidden') {
    offCanvas.className = 'offside-canvas';
    hBurger.setAttribute('src', 'assets/images/icon-menu-close.svg');
  } else {
    offCanvas.className = 'hidden';
    hBurger.setAttribute('src', 'assets/images/icon-menu.svg');
  }
})