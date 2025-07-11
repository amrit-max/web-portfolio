// Portfolio Website Interactivity
// Author: [Your Name]

// Smooth Scroll Navigation
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // Set active class
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Hamburger Dropdown Navigation
const navToggleBtn = document.getElementById('navToggle');
const navLinksMenu = document.getElementById('navLinks');
if (navToggleBtn && navLinksMenu) {
  navToggleBtn.addEventListener('click', function() {
    const isOpen = navLinksMenu.classList.toggle('open');
    navToggleBtn.classList.toggle('open');
    navToggleBtn.setAttribute('aria-expanded', isOpen);
  });
  // Close menu on link click (mobile)
  navLinksMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        navLinksMenu.classList.remove('open');
        navToggleBtn.classList.remove('open');
        navToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Section Reveal on Scroll
const sections = document.querySelectorAll('.section');
const revealSection = () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) {
      section.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hero CTA Button Scroll
const viewWorkBtn = document.getElementById('viewWorkBtn');
if (viewWorkBtn) {
  viewWorkBtn.addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  });
}

// Video Modal Functionality
const videoModal = document.getElementById('videoModal');
const openVideoModal = document.getElementById('openVideoModal');
const closeVideoModal = document.getElementById('closeVideoModal');
if (openVideoModal && videoModal && closeVideoModal) {
  openVideoModal.addEventListener('click', () => {
    videoModal.classList.add('show');
    // Pause video if already playing
    const video = videoModal.querySelector('video');
    if (video) video.currentTime = 0;
  });
  closeVideoModal.addEventListener('click', () => {
    videoModal.classList.remove('show');
    const video = videoModal.querySelector('video');
    if (video) video.pause();
  });
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      videoModal.classList.remove('show');
      const video = videoModal.querySelector('video');
      if (video) video.pause();
    }
  });
}

// Project Details Modal
const projectModal = document.getElementById('projectModal');
const closeProjectModal = document.getElementById('closeProjectModal');
const projectDetails = document.getElementById('projectDetails');
const viewDetailsBtns = document.querySelectorAll('.view-details');
const projectData = [
  {
    title: 'Project Title 1',
    image: 'project1.jpg',
    description: 'Detailed description for Project 1. Explain the process, challenges, and results.',
    highlights: ['UI/UX Design', 'Responsive', 'Branding']
  },
  {
    title: 'Project Title 2',
    image: 'project2.jpg',
    description: 'Detailed description for Project 2. Explain the process, challenges, and results.',
    highlights: ['Webflow', 'Animation', 'SEO']
  },
  {
    title: 'Project Title 3',
    image: 'project3.jpg',
    description: 'Detailed description for Project 3. Explain the process, challenges, and results.',
    highlights: ['Landing Page', 'Conversion', 'Minimal']
  },
  {
    title: 'Project Title 4',
    image: 'project4.jpg',
    description: 'Detailed description for Project 4. Explain the process, challenges, and results.',
    highlights: ['E-commerce', 'Custom Design', 'Performance']
  }
];
viewDetailsBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const idx = parseInt(btn.getAttribute('data-project')) - 1;
    if (projectData[idx]) {
      projectDetails.innerHTML = `
        <h2>${projectData[idx].title}</h2>
        <img src="${projectData[idx].image}" alt="${projectData[idx].title}" style="width:100%;border-radius:12px;margin-bottom:1rem;">
        <p>${projectData[idx].description}</p>
        <ul style="padding-left:1.2rem;">
          ${projectData[idx].highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      `;
      projectModal.classList.add('show');
    }
  });
});
if (closeProjectModal && projectModal) {
  closeProjectModal.addEventListener('click', () => {
    projectModal.classList.remove('show');
  });
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove('show');
    }
  });
}

// Contact Form Validation (basic)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple validation
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    // Simulate form submission
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
} 
