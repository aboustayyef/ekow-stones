// Handles staggered viewport animation for .feature-animate elements

document.addEventListener('DOMContentLoaded', () => {
  const featureHeaders = document.querySelectorAll('.feature-animate');
  if ('IntersectionObserver' in window && featureHeaders.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      // Sort entries by DOM order
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => {
        return Array.from(featureHeaders).indexOf(a.target) - Array.from(featureHeaders).indexOf(b.target);
      });
      visible.forEach((entry, i) => {
        setTimeout(() => {
          entry.target.classList.add('slideFadeInLeft');
          obs.unobserve(entry.target);
        }, i * 120); // 120ms stagger
      });
    }, { threshold: 0.2 });
    featureHeaders.forEach(h3 => observer.observe(h3));
  } else {
    // Fallback: show all if IntersectionObserver not supported
    featureHeaders.forEach((h3, i) => {
      setTimeout(() => h3.classList.add('slideFadeInLeft'), i * 120);
    });
  }
});
