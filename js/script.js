/**
 * ROSEDSIGNS — LUXURY CREATIVE & DIGITAL STUDIO
 * Production JavaScript & Interactivity Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. DATA REPOSITORIES (GENUINE ROSEDSIGNS PROJECTS & SERVICES)
  // ------------------------------------------------------------------------
  const projectDatabase = {
    'a2b-perth': {
      title: 'A2B Perth — Harrisdale & Yokine',
      category: 'Food & Hospitality',
      type: 'web',
      tags: ['Web Design', 'Social Media', 'Reels', 'Digital Branding'],
      client: 'Adyar Ananda Bhavan (Perth, WA)',
      url: 'https://a2bperth.com.au',
      image: 'assets/images/a2b-website-supplied.webp',
      description: 'Bringing the rich culinary heritage and authentic South Indian vegetarian dining experience to Perth. For A2B’s Harrisdale and Yokine locations, RoseDsigns crafted a welcoming, responsive web presence, vibrant festival social campaigns, and high-engagement reels capturing signature dishes, festive feasts, and catering excellence.',
      deliverables: [
        'Responsive Restaurant & Menu Website',
        'Catering Inquiries & Lead Flow',
        'Festival Social Media Campaign Creatives',
        'High-Engagement Instagram & Facebook Reels',
        'Google Business Profile & Local Search Optimization'
      ],
      socials: [
        { label: 'Harrisdale Facebook', url: 'https://www.facebook.com/profile.php?id=61550215796504' },
        { label: 'Yokine Facebook', url: 'https://www.facebook.com/profile.php?id=61576073338236' },
        { label: 'Perth Instagram', url: 'https://www.instagram.com/a2bperth/' },
        { label: 'Yokine Instagram', url: 'https://www.instagram.com/a2byokine/' }
      ]
    },
    'thirai-flicks': {
      title: 'Thirai Flicks — Cinema Distribution',
      category: 'Film & Entertainment',
      type: 'branding',
      tags: ['Entertainment Branding', 'Video Production', 'Social Storytelling'],
      client: 'Thirai Flicks (Australia, NZ, Fiji, PNG)',
      url: 'https://thiraiflicks.com/past-releases',
      image: 'assets/images/thirai-full-frame.webp',
      videoUrl: 'https://www.youtube.com/watch?v=WGW4HYoVm_I',
      description: 'Distributing prime Indian cinema and premier theatrical events across Australasia and the South Pacific. RoseDsigns established a commanding digital identity, theatrical promotion videos, and social buzz campaigns connecting moviegoers with the films and artists they cherish.',
      deliverables: [
        'Unified Theatrical Brand Identity',
        'Theatrical Trailers & Video Promo Assets',
        'Social Media Launch Graphics & Stories',
        'Ticketing & Release Announcement Campaigns'
      ],
      socials: [
        { label: 'Facebook Page', url: 'https://www.facebook.com/thiraiflicks1' },
        { label: 'Instagram Profile', url: 'https://www.instagram.com/thiraiflicks/' },
        { label: 'YouTube Feature Video', url: 'https://www.youtube.com/watch?v=WGW4HYoVm_I' }
      ]
    },
    'biriyani-box': {
      title: 'Biriyani Box — Bold Flavor Takeaway',
      category: 'Food & Takeaway',
      type: 'web',
      tags: ['Brand Identity', 'Web Presence', 'Social Video Teasers'],
      client: 'Biriyani Box (Perth, Australia)',
      url: 'https://biriyanibox.com.au',
      image: 'assets/images/biriyani-website-supplied.webp',
      description: 'An exciting culinary takeaway venture introducing traditional Dum Biriyani and modern South Indian street flavors to Perth. RoseDsigns orchestrated a vibrant visual identity, custom web interface, and viral launch teasers that ignited anticipation across local foodies.',
      deliverables: [
        'Brand Identity System & Logo Design',
        'Mobile-First Ordering & Menu Interface',
        'Social Media Launch Teaser Reels',
        'Packaging & Digital Collateral Direction'
      ],
      socials: [
        { label: 'Facebook Page', url: 'https://www.facebook.com/profile.php?id=61594620573498' },
        { label: 'Instagram Profile', url: 'https://www.instagram.com/biriyanibox_bb/' }
      ]
    },
    'reflections': {
      title: 'Reflections — The Resilience of Extraordinary Lives',
      category: 'Culture & Storytelling',
      type: 'social',
      tags: ['Documentary', 'Brand Strategy', 'Editorial Design'],
      client: 'Coming Soon / In Production',
      url: '#',
      image: 'assets/images/philosophy-brand-board.webp',
      description: 'An upcoming documentary and editorial storytelling project exploring resilience, heritage, and human fortitude through poignant audio-visual narrative formats.',
      deliverables: [
        'Editorial Narrative Framework',
        'Podcast & Series Visual Identity',
        'Multi-Platform Digital Distribution Strategy'
      ],
      socials: []
    },
    'palayam-peppers': {
      title: 'Palayam Peppers — Artisanal Heritage Story',
      category: 'Heritage & Culinary',
      type: 'branding',
      tags: ['Heritage Branding', 'Packaging', 'Visual Storytelling'],
      client: 'Coming Soon / In Production',
      url: '#',
      image: 'assets/images/RoseDsigns-Brand-Guidelines.jpeg',
      description: 'An upcoming culinary heritage concept weaving the rich history of indigenous spices and South Indian agricultural lineage into an artisanal brand story.',
      deliverables: [
        'Heritage Brand Identity & Packaging Concepts',
        'Brand Storytelling & Content Strategy',
        'Direct-to-Consumer Digital Presence'
      ],
      socials: []
    },
    'luxe-atelier': {
      title: 'Atelier Bloom — Fashion & Editorial Concept',
      category: 'Luxury Fashion & Commerce',
      type: 'web',
      tags: ['Sample / Concept Showcase', 'E-Commerce UX', 'Editorial Direction'],
      client: 'Studio Demonstration Concept',
      url: '#',
      image: 'assets/images/a2b-yokine-instagram-feature.webp',
      description: 'Demonstrative high-fashion editorial case study showcasing RoseDsigns’ capability in ultra-minimalist luxury web architectures, bespoke interactions, and typography hierarchy.',
      deliverables: [
        'Editorial Lookbook Grid System',
        'Micro-Interaction Design & CSS Animations',
        'Mobile-First High-Conversion Checkout UX'
      ],
      socials: []
    }
  };

  // ------------------------------------------------------------------------
  // 2. SCROLL PROGRESS BAR & STICKY HEADER
  // ------------------------------------------------------------------------
  const progressBar = document.getElementById('scrollProgressBar');
  const siteHeader = document.querySelector('.site-header');

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (siteHeader) {
      if (scrollTop > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (scrollTop > 450) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial invocation

  // Back to top action
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ------------------------------------------------------------------------
  // 3. RESPONSIVE MOBILE NAVIGATION DRAWER
  // ------------------------------------------------------------------------
  const menuToggle = document.getElementById('menuToggle');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileMenu = () => {
    const isOpen = mobileNavDrawer.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  const openMobileMenu = () => {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.add('open');
    menuToggle.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavDrawer && mobileNavDrawer.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // ------------------------------------------------------------------------
  // 4. HERO SHOWCASE SLIDER / CAROUSEL
  // ------------------------------------------------------------------------
  const heroSlider = document.querySelector('.showcase-slider');
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.showcase-slide');
    const pillButtons = document.querySelectorAll('.showcase-pill-btn');
    const prevArrow = document.getElementById('showcasePrev');
    const nextArrow = document.getElementById('showcaseNext');
    let currentSlide = 0;
    let autoPlayTimer = null;
    let isPaused = false;

    const showSlide = (index) => {
      if (slides.length === 0) return;
      currentSlide = (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        if (i === currentSlide) {
          slide.classList.add('active');
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.classList.remove('active');
          slide.setAttribute('aria-hidden', 'true');
        }
      });

      pillButtons.forEach((pill, i) => {
        if (i === currentSlide) {
          pill.classList.add('active');
          pill.setAttribute('aria-pressed', 'true');
        } else {
          pill.classList.remove('active');
          pill.setAttribute('aria-pressed', 'false');
        }
      });
    };

    const nextSlide = () => showSlide(currentSlide + 1);
    const prevSlide = () => showSlide(currentSlide - 1);

    if (prevArrow) prevArrow.addEventListener('click', () => { prevSlide(); resetAutoplay(); });
    if (nextArrow) nextArrow.addEventListener('click', () => { nextSlide(); resetAutoplay(); });

    pillButtons.forEach((pill, i) => {
      pill.addEventListener('click', () => {
        showSlide(i);
        resetAutoplay();
      });
    });

    const startAutoplay = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      autoPlayTimer = setInterval(() => {
        if (!isPaused) nextSlide();
      }, 5000);
    };

    const resetAutoplay = () => {
      clearInterval(autoPlayTimer);
      startAutoplay();
    };

    heroSlider.addEventListener('mouseenter', () => { isPaused = true; });
    heroSlider.addEventListener('mouseleave', () => { isPaused = false; });
    heroSlider.addEventListener('focusin', () => { isPaused = true; });
    heroSlider.addEventListener('focusout', () => { isPaused = false; });

    startAutoplay();
  }

  // ------------------------------------------------------------------------
  // 5. PORTFOLIO CATEGORY FILTER
  // ------------------------------------------------------------------------
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cardType = card.getAttribute('data-type');
          if (filterValue === 'all' || cardType === filterValue) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 30);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // ------------------------------------------------------------------------
  // 6. INTERACTIVE PROJECT MODAL (LIGHTBOX)
  // ------------------------------------------------------------------------
  const projectModalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalMedia = document.getElementById('modalMedia');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDescription = document.getElementById('modalDescription');
  const modalClient = document.getElementById('modalClient');
  const modalDeliverables = document.getElementById('modalDeliverables');
  const modalLink = document.getElementById('modalLink');
  const modalSocials = document.getElementById('modalSocials');

  const openProjectModal = (projectId) => {
    const data = projectDatabase[projectId];
    if (!data || !projectModalBackdrop) return;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalDescription) modalDescription.textContent = data.description;
    if (modalClient) modalClient.textContent = data.client;

    // Media preview
    if (modalMedia) {
      modalMedia.innerHTML = '';
      if (data.videoUrl) {
        modalMedia.innerHTML = `
          <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
            <iframe src="https://www.youtube-nocookie.com/embed/${data.videoUrl.split('v=')[1]}?autoplay=0" 
                    title="${data.title}" 
                    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
          </div>`;
      } else if (data.image) {
        const img = document.createElement('img');
        img.src = data.image;
        img.alt = data.title;
        modalMedia.appendChild(img);
      }
    }

    // Deliverables list
    if (modalDeliverables) {
      modalDeliverables.innerHTML = '';
      if (data.deliverables && data.deliverables.length > 0) {
        data.deliverables.forEach(item => {
          const li = document.createElement('li');
          li.style.marginBottom = '6px';
          li.style.display = 'flex';
          li.style.alignItems = 'center';
          li.style.gap = '8px';
          li.innerHTML = `<span style="color:var(--gold-light);">✦</span> ${item}`;
          modalDeliverables.appendChild(li);
        });
      }
    }

    // Live link
    if (modalLink) {
      if (data.url && data.url !== '#') {
        modalLink.href = data.url;
        modalLink.style.display = 'inline-flex';
        modalLink.textContent = 'Visit Live Project ↗';
      } else {
        modalLink.style.display = 'none';
      }
    }

    // Socials
    if (modalSocials) {
      modalSocials.innerHTML = '';
      if (data.socials && data.socials.length > 0) {
        data.socials.forEach(s => {
          const a = document.createElement('a');
          a.href = s.url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.textContent = `${s.label} ↗`;
          a.style.display = 'inline-block';
          a.style.marginRight = '12px';
          a.style.marginBottom = '6px';
          modalSocials.appendChild(a);
        });
      }
    }

    projectModalBackdrop.classList.add('open');
    projectModalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    if (!projectModalBackdrop) return;
    projectModalBackdrop.classList.remove('open');
    projectModalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (modalMedia) {
      modalMedia.innerHTML = ''; // Stop video playback
    }
  };

  document.querySelectorAll('[data-project-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project-trigger');
      openProjectModal(id);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (projectModalBackdrop) {
    projectModalBackdrop.addEventListener('click', (e) => {
      if (e.target === projectModalBackdrop) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModalBackdrop && projectModalBackdrop.classList.contains('open')) {
      closeProjectModal();
    }
  });

  // ------------------------------------------------------------------------
  // 7. FAQ ACCORDION (SUBPAGES & SECTIONS)
  // ------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(otherItem => otherItem.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // ------------------------------------------------------------------------
  // 8. CONTACT FORM & INTERACTIVE PROJECT BRIEF BUILDER
  // ------------------------------------------------------------------------
  const briefForm = document.getElementById('projectBriefForm');
  const briefTextarea = document.getElementById('projectDetails');
  const charCounter = document.getElementById('charCount');
  const formToast = document.getElementById('formToast');
  const downloadBriefBtn = document.getElementById('downloadBriefBtn');

  // Real-time character counter
  if (briefTextarea && charCounter) {
    briefTextarea.addEventListener('input', () => {
      const len = briefTextarea.value.length;
      charCounter.textContent = `${len} / 1000 characters`;
    });
  }

  // Pre-fill from service links
  document.querySelectorAll('[data-select-service]').forEach(link => {
    link.addEventListener('click', (e) => {
      const sName = link.getAttribute('data-select-service');
      const checkbox = document.querySelector(`input[name="services"][value="${sName}"]`);
      if (checkbox) checkbox.checked = true;
      if (briefTextarea) {
        briefTextarea.value = `Hello RoseDsigns team,\n\nI am interested in collaborating on ${sName}.\nOur vision involves: `;
        briefTextarea.focus();
      }
    });
  });

  // Generate brief text representation
  const compileBriefData = (formData) => {
    const services = Array.from(formData.getAll('services')).join(', ') || 'Custom Digital Solution';
    return `=====================================================
ROSEDSIGNS — PROJECT BRIEF
Distinctive Identities · Considered Websites · Connected Stories
=====================================================

1. CLIENT CONTACT INFORMATION
   - Full Name:    ${formData.get('fullName') || 'N/A'}
   - Email:        ${formData.get('email') || 'N/A'}
   - Company:      ${formData.get('companyName') || 'N/A'}
   - Location:     ${formData.get('clientLocation') || 'Not Specified'}

2. PROJECT SCOPE & OBJECTIVES
   - Services:     ${services}
   - Timeline:     ${formData.get('timeline') || 'Flexible'}
   - Target Budget:${formData.get('budgetRange') || 'To be discussed'}

3. PROJECT DETAILS & VISION
${formData.get('projectDetails') || 'No additional details provided.'}

=====================================================
Compiled on: ${new Date().toLocaleString()}
Share directly with: admin@rosedsigns.com
Official Website: https://rosedsigns.com
=====================================================`;
  };

  if (briefForm) {
    briefForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Form validation
      const name = briefForm.elements['fullName'].value.trim();
      const email = briefForm.elements['email'].value.trim();
      const message = briefForm.elements['projectDetails'].value.trim();

      if (!name || !email || !message) {
        if (formToast) {
          formToast.className = 'form-toast error';
          formToast.textContent = 'Please fill out your Name, Email, and Project Details before proceeding.';
          formToast.style.display = 'block';
        }
        return;
      }

      // Email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (formToast) {
          formToast.className = 'form-toast error';
          formToast.textContent = 'Please enter a valid email address.';
          formToast.style.display = 'block';
        }
        return;
      }

      const formData = new FormData(briefForm);
      const briefText = compileBriefData(formData);

      // Downloadable brief trigger
      const blob = new Blob([briefText], { type: 'text/plain;charset=utf-8' });
      const downloadUrl = URL.createObjectURL(blob);
      const tempLink = document.createElement('a');
      tempLink.href = downloadUrl;
      tempLink.download = `RoseDsigns-Project-Brief-${name.replace(/\s+/g, '_')}.txt`;
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);

      // Show success feedback
      if (formToast) {
        formToast.className = 'form-toast success';
        formToast.innerHTML = `
          <strong>✦ Project Brief Compiled Successfully!</strong><br>
          Your brief has been downloaded as a formatted document. You can attach it directly to an email to 
          <a href="mailto:admin@rosedsigns.com?subject=New%20Project%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(briefText)}" 
             style="color:var(--gold-light);text-decoration:underline;font-weight:600;">
            admin@rosedsigns.com
          </a> or discuss it with our team.
        `;
        formToast.style.display = 'block';
      }

      // Prepare mailto link option
      const mailtoUrl = `mailto:admin@rosedsigns.com?subject=Project Inquiry — ${encodeURIComponent(name)}&body=${encodeURIComponent(briefText)}`;
      const emailLauncherBtn = document.getElementById('emailLauncherBtn');
      if (emailLauncherBtn) {
        emailLauncherBtn.href = mailtoUrl;
        emailLauncherBtn.style.display = 'inline-flex';
      }
    });
  }

  // ------------------------------------------------------------------------
  // 9. DYNAMIC COPYRIGHT YEAR
  // ------------------------------------------------------------------------
  const yearEls = document.querySelectorAll('.dynamic-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = currentYear;
  });

  // ------------------------------------------------------------------------
  // 10. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }
});

