/**
* Template Name: iPortfolio
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import Waypoint from 'waypoints/lib/noframework.waypoints';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import AOS from 'aos';
import PureCounter from '@srexi/purecounterjs';

const Main = () => {
  const [navbarLinks, setNavbarLinks] = useState([]);
  const [backToTopActive, setBackToTopActive] = useState(false);

  useEffect(() => {
    setNavbarLinks(document.querySelectorAll('#navbar .scrollto'));

    const handleScroll = () => {
      const position = window.scrollY + 200;
      navbarLinks.forEach(navbarlink => {
        if (!navbarlink.hash) return;
        const section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });

      if (window.scrollY > 100) {
        setBackToTopActive(true);
      } else {
        setBackToTopActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }

    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      const typedStrings = typedElement.getAttribute('data-typed-items').split(',');
      new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

    const skillsContent = document.querySelector('.skills-content');
    if (skillsContent) {
      new Waypoint({
        element: skillsContent,
        offset: '80%',
        handler: function() {
          const progress = document.querySelectorAll('.progress .progress-bar');
          progress.forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    }

    const portfolioContainer = document.querySelector('.portfolio-container');
    if (portfolioContainer) {
      const portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
      portfolioFilters.forEach(filter => {
        filter.addEventListener('click', e => {
          e.preventDefault();
          portfolioFilters.forEach(el => el.classList.remove('filter-active'));
          filter.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: filter.getAttribute('data-filter')
          });
          portfolioIsotope.on('arrangeComplete', () => {
            AOS.refresh();
          });
        });
      });
    }

    GLightbox({ selector: '.portfolio-lightbox' });

    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });

    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    new PureCounter();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, [navbarLinks]);

  return (
    <div>
      <button className={`back-to-top ${backToTopActive ? 'active' : ''}`}>Back to Top</button>
    </div>
  );
};

export default Main;
