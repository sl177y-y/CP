function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // entry.target.style.opacity = '1';
        entry.target.style.transform = 'scale(1)';
        observer.unobserve(entry.target);
      }
    });
  }
  
  const options = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.3,
  };
  
  const observer = new IntersectionObserver(handleIntersection, options);
  const fadeElements = document.querySelectorAll('.newfadein');
  fadeElements.forEach(element => {
    observer.observe(element);
  });
  
  
    var container = document.getElementById('SVG_sdk');
    var animation = lottie.loadAnimation({
      container: container, renderer: 'svg', loop: true, autoplay: true,
      path: '/assets/stacklottie.json');
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          // alert('working');
          const targetElement = document.getElementById(this.getAttribute('href').substring(1));
          if (targetElement) {
              const offset = 80; 
              const targetRect = targetElement.getBoundingClientRect();
              const targetPosition = window.pageYOffset + targetRect.top - offset;
  
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });
  