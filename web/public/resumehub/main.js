/* NachiketBhogawar.in - Main Interactive JavaScript */
(function() {
  'use strict';

  // =====================
  // MOBILE BURGER MENU
  // =====================
  function initBurgerMenu() {
    var burgers = document.querySelectorAll('.Header_burgerMenu__UbzIt');
    burgers.forEach(function(burger) {
      burger.addEventListener('click', function() {
        var nav = burger.closest('nav') || burger.parentElement;
        var menuContainer = nav.querySelector('.Header_menuContainer__4dHIe');
        var mobileMenu = nav.querySelector('.MobileHeader_mobileHeaderContainer__bI1Qh') ||
                         document.querySelector('.MobileHeader_mobileHeaderContainer__bI1Qh');

        burger.classList.toggle('Header_menuOpen__Ua1uD');

        if (menuContainer) {
          var menu = menuContainer.querySelector('.Header_menu__QX_SG');
          if (menu) {
            menu.classList.toggle('Header_open__R24F5');
            menu.style.display = menu.classList.contains('Header_open__R24F5') ? 'block' : 'none';
          }
        }

        if (mobileMenu) {
          mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
        }
      });
    });
  }

  // =====================
  // DESKTOP DROPDOWN MENUS
  // =====================
  function initDropdowns() {
    var dropdownTriggers = document.querySelectorAll('.Header_menuItem__N8sV0 .cursor-pointer');
    dropdownTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        var parent = trigger.closest('.Header_menuItem__N8sV0');
        var dropdown = parent ? parent.querySelector('.Header_menu__QX_SG') : null;
        if (dropdown) {
          var isVisible = dropdown.style.display === 'block';
          dropdown.style.display = isVisible ? 'none' : 'block';
        }
      });

      trigger.parentElement.addEventListener('mouseenter', function() {
        var dropdown = trigger.closest('.Header_menuItem__N8sV0').querySelector('.Header_menu__QX_SG');
        if (dropdown) dropdown.style.display = 'block';
      });

      trigger.parentElement.addEventListener('mouseleave', function() {
        var dropdown = trigger.closest('.Header_menuItem__N8sV0').querySelector('.Header_menu__QX_SG');
        if (dropdown) dropdown.style.display = 'none';
      });
    });
  }

  // =====================
  // CAROUSEL NAVIGATION
  // =====================
  function initCarousels() {
    var carousels = document.querySelectorAll('.Carousel_carouselSlider___lkzz, .Carousel_carouselSlider__zPYrn');
    carousels.forEach(function(carousel) {
      var slides = carousel.querySelectorAll('.Carousel_slide__Cv1YG, .Carousel_slide__q8zTG');
      if (slides.length === 0) return;

      var currentIndex = 0;
      var visibleSlides = 5;
      var slideWidth = 100 / visibleSlides;

      function updateCarousel() {
        var offset = -(currentIndex * slideWidth);
        carousel.style.transform = 'translateX(' + offset + '%)';
        carousel.style.transition = 'transform 0.5s ease-in-out';

        var dots = carousel.parentElement ? carousel.parentElement.querySelectorAll('.Carousel_dot__NPDUG, .Carousel_dot__CMT35') : [];
        dots.forEach(function(dot, i) {
          dot.classList.remove('Carousel_active__KAPfN', 'Carousel_active__UmIwN');
          if (i === currentIndex) {
            dot.classList.add('Carousel_active__KAPfN', 'Carousel_active__UmIwN');
          }
        });
      }

      var prevArrow = carousel.parentElement ? carousel.parentElement.querySelector('.Carousel_prevArrow__rhAxT, .Carousel_prevArrow__rDP4f') : null;
      var nextArrow = carousel.parentElement ? carousel.parentElement.querySelector('.Carousel_nextArrow__d7Bzl, .Carousel_nextArrow__JL2xo') : null;

      if (prevArrow) {
        prevArrow.addEventListener('click', function() {
          currentIndex = Math.max(0, currentIndex - 1);
          updateCarousel();
        });
      }

      if (nextArrow) {
        nextArrow.addEventListener('click', function() {
          currentIndex = Math.min(slides.length - visibleSlides, currentIndex + 1);
          updateCarousel();
        });
      }

      var dots = carousel.parentElement ? carousel.parentElement.querySelectorAll('.Carousel_dots__uhyys .Carousel_dot__NPDUG, .Carousel_pagination__hlSSA .Carousel_dot__CMT35') : [];
      dots.forEach(function(dot, i) {
        dot.addEventListener('click', function() {
          currentIndex = i;
          updateCarousel();
        });
      });
    });
  }

  // =====================
  // RESUME PICKER CLICKABLE DIVS
  // =====================
  function initResumePicker() {
    var pickerLinks = document.querySelectorAll('.ResumePickerSection_link__sZSbS');
    pickerLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        var titleEl = link.querySelector('.ResumePickerSection_exampleTitle__2hfSo');
        if (titleEl) {
          window.location.href = '/resume-examples/';
        }
      });
    });
  }

  // =====================
  // "SEE MORE" TOGGLE BUTTONS
  // =====================
  function initSeeMore() {
    var seeMoreButtons = document.querySelectorAll('.Category_seeMore__I80EG, .ExpandableList_showMore__Bn7Xm, .ExpandableList_showMore__RU3s1');
    seeMoreButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var container = btn.closest('.Category_listContent__SImGD, .ExpandableList_listGrid__Dt7t2, .ExpandableList_listGrid__Jgl1W');
        if (container) {
          var hiddenItems = container.querySelectorAll(':not(:nth-child(-n+3))');
          var isExpanded = btn.getAttribute('data-expanded') === 'true';

          hiddenItems.forEach(function(item) {
            item.style.display = isExpanded ? 'none' : 'block';
          });

          btn.setAttribute('data-expanded', !isExpanded);
          var arrow = btn.querySelector('.Category_arrow__6Rzi0, .Category_rotate__MFVN9, .ExpandableList_arrow__dP2ud, .ExpandableList_rotate___1xP5, .ExpandableList_arrow__hXDl0, .ExpandableList_rotate__42U5J');
          if (arrow) {
            arrow.classList.toggle('Category_rotate__MFVN9', !isExpanded);
            arrow.classList.toggle('ExpandableList_rotate___1xP5', !isExpanded);
            arrow.classList.toggle('ExpandableList_rotate__42U5J', !isExpanded);
          }
          btn.textContent = isExpanded ? 'See more' : 'See less';
        }
      });
    });
  }

  // =====================
  // FAQ ACCORDION ENHANCEMENT
  // =====================
  function initFAQ() {
    var faqElements = document.querySelectorAll('.FAQ_faqElement__GIz5L');
    faqElements.forEach(function(faq) {
      faq.addEventListener('toggle', function() {
        var iconPlus = faq.querySelector('.FAQ_iconPlus__m8SVf');
        var iconDot = faq.querySelector('.FAQ_iconDot__1Wjej');
        if (faq.open) {
          if (iconPlus) iconPlus.style.display = 'none';
          if (iconDot) iconDot.style.display = 'inline-flex';
        } else {
          if (iconPlus) iconPlus.style.display = 'inline-flex';
          if (iconDot) iconDot.style.display = 'none';
        }
      });
    });
  }

  // =====================
  // FOOTER ACCORDION (Mobile)
  // =====================
  function initFooterAccordion() {
    var footerToggles = document.querySelectorAll('.Footer_chevron__fhYqr');
    footerToggles.forEach(function(chevron) {
      chevron.addEventListener('click', function() {
        var list = chevron.closest('li') ? chevron.closest('li').querySelector('.Footer_list__dH2WQ') : null;
        if (list) {
          list.classList.toggle('Footer_expanded__5WKSY');
          chevron.classList.toggle('Footer_rotated__TkRin');
        }
      });
    });
  }

  // =====================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // =====================
  function initSmoothScroll() {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var targetId = link.getAttribute('href').substring(1);
        var target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // =====================
  // UPLOAD BUTTON ENABLE ON FILE SELECT
  // =====================
  function initUploadButtons() {
    var fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(function(input) {
      input.addEventListener('change', function() {
        if (input.files.length > 0) {
          var container = input.closest('.UploadResume_uploadResumeCta__UXxPh, .UploadResume_uploadResumeCtaTestA__k_mci, .UploadResume_uploadResumeCtaTestB__PDnS2');
          if (container) {
            var buttons = container.querySelectorAll('button[disabled]');
            buttons.forEach(function(btn) {
              btn.removeAttribute('disabled');
              btn.style.opacity = '1';
              btn.style.cursor = 'pointer';
            });
          }
        }
      });
    });
  }

  // =====================
  // ANIMATION TRIGGER ON SCROLL
  // =====================
  function initScrollAnimations() {
    var animatedElements = document.querySelectorAll('.opacity-0.animation-slide-fade-in-down, .opacity-0.animation-slide-fade-in-up, .opacity-0.animation-slide-fade-in-right, .opacity-0.animation-fade-in');

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) translateX(0)';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      animatedElements.forEach(function(el) {
        observer.observe(el);
      });
    } else {
      animatedElements.forEach(function(el) {
        el.style.opacity = '1';
      });
    }
  }

  // =====================
  // INIT ALL
  // =====================
  document.addEventListener('DOMContentLoaded', function() {
    initBurgerMenu();
    initDropdowns();
    initCarousels();
    initResumePicker();
    initSeeMore();
    initFAQ();
    initFooterAccordion();
    initSmoothScroll();
    initUploadButtons();
    initScrollAnimations();
  });

})();
