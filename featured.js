// ============ STAGGERED REVEAL ============
const storyCards = document.querySelectorAll('.story-card, .story-card-full');

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

// ============ PARALLAX ON STORY IMAGES ============
const storyImages = document.querySelectorAll('.story-card-image img, .story-card-full-image img');

window.addEventListener('scroll', () => {
  storyImages.forEach(img => {
    const rect = img.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top < windowHeight && rect.bottom > 0) {
      const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
      const yOffset = scrollPercent * 30;
      img.style.transform = `translateY(${yOffset}px) scale(1.05)`;
    }
  });
});