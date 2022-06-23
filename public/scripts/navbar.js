import { populateModalContent, clearModalContent } from './modal.js';

function showModal() {
  // Hamburger menu icon
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const modal = document.querySelector('.modal');
  hamburgerBtn.addEventListener('click', () => {
    modal.style = 'display: block';
    populateModalContent(); // load all classes from localstorage
  });
  window.addEventListener('click', e => {
    if (e.target == modal) {
      modal.style = 'display: none';
      clearModalContent();
    }
  });
}

export { showModal }