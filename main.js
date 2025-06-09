const shareBtn = document.querySelector('.article__share-btn');
const articlePopup = document.getElementById('article_popup');

if (shareBtn) {
  shareBtn.addEventListener('click', (e) => {
    const isExpanded = shareBtn.getAttribute('aria-expanded') === 'true';
    shareBtn.setAttribute('aria-expanded', String(!isExpanded));
    shareBtn.classList.toggle('active');
    articlePopup.classList.toggle('hidden');
  });
}
