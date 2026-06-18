// ============ FILTER BUTTONS ============
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    // اینجا می‌تونی منطق فیلتر واقعی اضافه کنی
  });
});

// ============ ADD TO CART ANIMATION ============
document.querySelectorAll('.prod-add').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const originalText = this.textContent;
    this.textContent = '✓ افزوده شد';
    this.style.background = 'var(--gold)';
    this.style.color = 'var(--espresso)';
    
    setTimeout(() => {
      this.textContent = originalText;
      this.style.background = 'var(--burgundy)';
      this.style.color = 'white';
    }, 2000);
  });
});