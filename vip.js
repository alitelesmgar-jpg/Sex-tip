// ============ GOLD PARTICLES MOUSE FOLLOW ============
const goldParticles = document.querySelectorAll('.gold-particle');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  goldParticles.forEach((p, i) => {
    const offsetX = (x - 0.5) * (30 + i * 8);
    const offsetY = (y - 0.5) * (30 + i * 8);
    p.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
});

// ============ VIP PRODUCT CLICK (SIMULATED) ============
document.querySelectorAll('.vip-product-card.blurred').forEach(card => {
  card.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.85); backdrop-filter: blur(15px);
      z-index: 9999; display: flex; align-items: center; justify-content: center;
      animation: fadeIn 0.4s ease-out;
    `;
    modal.innerHTML = `
      <div style="background: var(--espresso); border: 1px solid var(--gold); 
           border-radius: 1.5rem; padding: 4rem; text-align: center; max-width: 450px; width: 90%;
           animation: fadeInUp 0.6s ease-out;">
        <div style="font-size: 3rem; color: var(--gold); margin-bottom: 1rem; animation: pulse 2s infinite;">✦</div>
        <h3 style="font-family: var(--serif); color: white; font-size: 1.8rem; margin-bottom: 0.5rem;">دسترسی محدود</h3>
        <p style="color: rgba(255,255,255,0.5); font-weight: 300; line-height: 2; margin-bottom: 2rem;">
          این مجموعه تنها برای اعضای تأییدشده قابل مشاهده است.<br>
          لطفاً فرم عضویت را تکمیل کنید.
        </p>
        <button class="btn btn-gold" style="margin-bottom: 1rem;" onclick="document.querySelector('.membership').scrollIntoView({behavior: 'smooth'}); this.parentElement.parentElement.remove();">
          درخواست عضویت
        </button>
        <br>
        <button style="background: transparent; border: none; color: rgba(255,255,255,0.3); cursor: pointer; font-family: var(--sans); font-weight: 300;" 
                onclick="this.parentElement.parentElement.remove();">
          بستن
        </button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  });
});

// ============ FORM SUBMIT (SIMULATED) ============
const form = document.querySelector('.membership-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = '✓ درخواست ثبت شد';
    btn.style.background = '#2E7D32';
    
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 3000);
  });
}