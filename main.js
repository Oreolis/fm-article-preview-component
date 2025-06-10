const shareBtn = document.querySelector('.article__share-btn');
const articlePopup = document.getElementById('article_popup');

const updatePopupVisibility = () => {
  const isDesktop = window.innerWidth > 768;

  if (isDesktop) {
    articlePopup.classList.add('hidden');
  } else {
    articlePopup.classList.remove('visible');
    articlePopup.classList.remove('hidden');
  }
};

if (shareBtn) {
  shareBtn.addEventListener('click', () => {
  const isExpanded = shareBtn.getAttribute('aria-expanded') === 'true';
  shareBtn.setAttribute('aria-expanded', String(!isExpanded));
  shareBtn.classList.toggle('active');

  const isDesktop = window.innerWidth > 768;

  if (isDesktop) {
    articlePopup.classList.toggle('hidden');
  } else {
    articlePopup.classList.toggle('visible');
  }
});

  window.addEventListener('resize', updatePopupVisibility);
  updatePopupVisibility();
}
