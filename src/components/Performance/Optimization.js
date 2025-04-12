import React, { useEffect } from 'react';

const Optimization = () => {
  useEffect(() => {
    // Function to optimize performance
    const optimizePerformance = () => {
      // Example optimization: Lazy loading images
      const images = document.querySelectorAll('img');
      const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0.01
      };

      let observer;
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver((entries, self) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              preloadImage(entry.target);
              self.unobserve(entry.target);
            }
          });
        }, config);

        images.forEach(image => {
          observer.observe(image);
        });
      } else {
        // Fallback for browsers without IntersectionObserver support
        images.forEach(image => {
          preloadImage(image);
        });
      }
    };

    const preloadImage = (img) => {
      const src = img.getAttribute('data-src');
      if (!src) {
        return;
      }
      img.src = src;
    };

    optimizePerformance();
  }, []);

  return (
    <div>
      <h1>Performance Optimization</h1>
      <p>This component handles performance optimizations.</p>
    </div>
  );
};

export default Optimization;
