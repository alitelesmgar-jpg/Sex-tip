// ============ CUSTOM CURSOR ============
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .product-card, .category-card, .vip-card, .story-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// ============ NAV SCROLL ============
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// ============ REVEAL ON SCROLL ============
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - revealPoint) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', checkReveal);
  checkReveal();
}

// ============ PAGE TRANSITION ============
function initPageTransitions() {
  const transition = document.createElement('div');
  transition.classList.add('page-transition');
  document.body.appendChild(transition);
  
  document.querySelectorAll('a[href]:not([target="_blank"]):not([download])').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.endsWith('.html') && !href.startsWith('#')) {
        e.preventDefault();
        transition.classList.add('active');
        
        setTimeout(() => {
          window.location.href = href;
        }, 800);
      }
    });
  });
  
  window.addEventListener('pageshow', () => {
    transition.classList.remove('active');
  });
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initPageTransitions();
});