// Adventure Saathi — shared script for trek, yatra and team pages
(function(){
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', function(){
      var nav = document.querySelector('.primary-nav');
      if (!nav) return;
      var isOpen = nav.style.display === 'flex';
      nav.style.cssText = isOpen ? '' : 'display:flex; flex-direction:column; position:fixed; top:64px; left:0; right:0; background:#EEF1EA; padding:24px 32px; gap:20px; border-bottom:1px solid rgba(22,36,31,0.12); z-index:99;';
    });
  }

  // FAQ accordion
  var questions = document.querySelectorAll('.faq-question');
  for (var i = 0; i < questions.length; i++) {
    questions[i].setAttribute('aria-expanded', 'false');
    questions[i].addEventListener('click', function(){
      var item = this.parentElement;
      var open = item.classList.toggle('open');
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
