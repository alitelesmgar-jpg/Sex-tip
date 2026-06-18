// ============================================================
// NOIR & OR — LUXURY FOOD BOUTIQUE
// Complete Script — All Pages
// ============================================================

// ============ CUSTOM CURSOR ============
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .product-card, .prod-card, .category-card, .vip-product-card, .vip-teaser-card, .story-card, .story-card-full').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

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
  
  document.querySelectorAll('a[href]:not([target="_blank"]):not([download]):not([href^="#"])').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.includes('.html') && !href.startsWith('http')) {
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

// ============ HOME PAGE — PARALLAX ============
function initHomeParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        if (scrollY < window.innerHeight) {
          heroBg.style.transform = `translateY(${scrollY * 0.4}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ============ HOME PAGE — PARTICLES MOUSE ============
function initParticles() {
  const particles = document.querySelectorAll('.particle, .gold-particle');
  if (!particles.length) return;
  
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    particles.forEach((p, i) => {
      const offsetX = (x - 0.5) * (20 + i * 5);
      const offsetY = (y - 0.5) * (20 + i * 5);
      p.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
  });
}

// ============ PRODUCTS PAGE — FILTERS ============
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// ============ PRODUCTS PAGE — ADD TO CART ============
function initAddToCart() {
  document.querySelectorAll('.prod-add, .vip-add-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const originalText = this.textContent;
      this.textContent = '✓ افزوده شد';
      this.style.background = 'var(--gold)';
      this.style.color = 'var(--espresso)';
      
      setTimeout(() => {
        this.textContent = originalText;
        this.style.background = '';
        this.style.color = '';
      }, 2000);
    });
  });
}

// ============ FEATURED PAGE — STAGGERED REVEAL ============
function initStaggeredReveal() {
  const storyCards = document.querySelectorAll('.story-card, .story-card-full');
  if (!storyCards.length) return;
  
  function checkStoryCards() {
    storyCards.forEach((card, index) => {
      const top = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (top < windowHeight - 150) {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 200);
      }
    });
  }
  
  window.addEventListener('scroll', checkStoryCards);
  checkStoryCards();
}

// ============ FEATURED PAGE — IMAGE PARALLAX ============
function initStoryParallax() {
  const storyImages = document.querySelectorAll('.story-card-image img, .story-card-full-image img');
  if (!storyImages.length) return;
  
  window.addEventListener('scroll', () => {
    storyImages.forEach(img => {
      const rect = img.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
        const yOffset = scrollPercent * 30;
        img.style.transform = `scale(1.05) translateY(${yOffset}px)`;
      }
    });
  });
}

// ============ VIP PAGE — FORM SUBMIT ============
function initVipForm() {
  const form = document.querySelector('.membership-form');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = '✓ ثبت‌نام انجام شد';
    btn.style.background = '#2E7D32';
    btn.style.color = 'white';
    
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
    }, 3000);
  });
}

// ============ INIT ALL ============
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initPageTransitions();
  initHomeParallax();
  initParticles();
  initFilters();
  initAddToCart();
  initStaggeredReveal();
  initStoryParallax();
  initVipForm();
});
