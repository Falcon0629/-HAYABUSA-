const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // ハンバーガーのアニメーション
  mobileNav.classList.toggle('open');   // メニューの表示切替
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('open');
  });
});