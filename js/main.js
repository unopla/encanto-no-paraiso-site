/* ============================================================
   ENCANTO NO PARAÍSO — main.js
   Scroll animations, Header behavior, Slideshow, Interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Header scroll behavior ── */
  const header = document.querySelector('.site-header');
  const isHeroPage = document.querySelector('.hero');

  if (header) {
    const updateHeader = () => {
      if (isHeroPage) {
        if (window.scrollY > 60) {
          header.classList.remove('hero-mode');
          header.classList.add('scrolled');
        } else {
          header.classList.add('hero-mode');
          header.classList.remove('scrolled');
        }
      } else {
        header.classList.add('scrolled');
      }
    };
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ── Mobile menu ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const open = mobileMenu.classList.contains('open');
      hamburger.setAttribute('aria-expanded', open);
    });
    // Close on link click
    mobileMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  /* ── Active nav link ── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || href.replace('.php', '.html') === currentPath)) {
      link.classList.add('active');
    }
  });

  /* ── Scroll reveal ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  /* ── Hero parallax ── */
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg) {
    heroBg.style.transform = 'scale(1.05)';
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const rate = scrolled * 0.3;
      heroBg.style.transform = `scale(1.05) translateY(${rate}px)`;
    }, { passive: true });
  }

  /* ── Slideshow (Cabanas page) ── */
  const slideshowImg = document.getElementById('imagem');
  const btnLeft      = document.getElementById('setaEsquerda');
  const btnRight     = document.getElementById('setaDireita');

  if (slideshowImg && btnLeft && btnRight) {
    // These are the same image paths used in the original repo
    const images = [
      'IMG/img1.webp',
      'IMG/img2.webp',
      'IMG/img3.webp',
      'IMG/img4.webp',
      'IMG/img5.webp',
      'IMG/img6.webp',
      'IMG/img8.webp',
      'IMG/img9.webp',
      'IMG/imgcabanas.webp',
    ];
    let current = 0;

    const goTo = (index) => {
      slideshowImg.style.opacity = '0';
      slideshowImg.style.transform = 'scale(0.97)';
      setTimeout(() => {
        current = (index + images.length) % images.length;
        slideshowImg.src = images[current];
        slideshowImg.style.opacity = '1';
        slideshowImg.style.transform = 'scale(1)';
      }, 200);
    };

    slideshowImg.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    btnLeft.addEventListener('click',  () => goTo(current - 1));
    btnRight.addEventListener('click', () => goTo(current + 1));

    // Auto-advance every 5s
    let autoSlide = setInterval(() => goTo(current + 1), 5000);
    [btnLeft, btnRight].forEach(btn => {
      btn.addEventListener('click', () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => goTo(current + 1), 5000);
      });
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft')  goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
    });
  }

  /* ── Smooth anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Lazy load images ── */
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imgObserver.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
  }

});
