const revealElements = () => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15
    }
  );

  document.querySelectorAll('[data-reveal]').forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
};

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', revealElements);
}
