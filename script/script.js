const drawerButton = document.querySelector('.drawer-button');
const drawer = document.querySelector('.drawer');

drawerButton.addEventListener('click', () => {
  drawer.classList.toggle('open');
});
