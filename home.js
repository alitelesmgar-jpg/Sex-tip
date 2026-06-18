// ============ PARALLAX ============
const heroBg = document.querySelector('.hero-bg');
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollY = window.pageYOffset;
      if (heroBg && scrollY < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }
});

// ============ PARTICLES MOUSE INTERACTION ============
const particles = document.querySelectorAll('.particle');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  particles.forEach((p, i) => {
    const offsetX = (x - 0.5) * (20 + i * 5);
    const offsetY = (y - 0.5) * (20 + i * 5);
    p.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});

// ============ VIP TEASER CLICK ============
document.querySelectorAll('.vip-teaser-card.blurred').forEach(card => {
  card.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.8); backdrop-filter: blur(10px);
      z-index: 9999; display: flex; align-items: center; justify-content: center;
      animation: fadeIn 0.4s ease-out;
    `;
    modal.innerHTML = `
      <div style="background: var(--espresso); border: 1px solid var(--gold); 
           border-radius: 1rem; padding: 3rem; text-align: center; max-width: 400px;
           animation: fadeInUp 0.6s ease-out;">
        <div style="font-size: 2rem; color: var(--gold); margin-bottom: 1rem;">✦</div>
        <h3 style="font-family: var(--serif); color: white; font-size: 1.5rem; margin-bottom: 1rem;">باشگاه خصوصی</h3>
        <p style="color: rgba(255,255,255,0.6); font-weight: 300; margin-bottom: 2rem;">
          این مجموعه تنها برای اعضای دعوت‌شده قابل مشاهده است.
        </p>
        <a href="vip.html" class="btn btn-gold">درخواست عضویت</a>
        <button class="btn btn-ghost" style="margin-right: 1rem; cursor: pointer;" onclick="this.parentElement.parentElement.remove()">بستن</button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  });
});