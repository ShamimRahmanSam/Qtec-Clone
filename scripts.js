document.addEventListener('DOMContentLoaded', function() {
    // Client Logos Slideshow
    const logos = document.querySelectorAll('.client-logos img');
    let currentIndex = 0; // Start after the first 5 logos
    const interval = 2000; // Time in milliseconds for each slide-in
  
    // Function to slide in logos
    const slideInLogos = () => {
      if (currentIndex < logos.length) {
        setTimeout(() => {
          logos[currentIndex].style.visibility = 'visible'; // Make logo visible
          setTimeout(() => {
            logos[currentIndex].classList.add('in-view');
            currentIndex++;
            slideInLogos(); // Call function recursively
          }, 100); // Delay before adding 'in-view' class
        }, interval); // Delay before sliding in the next logo
      }
    };
  
    // Start sliding in logos
    slideInLogos();
  
    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  
    // Auto-Scroll Testimonials
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 0) {
      testimonials[currentTestimonial].style.display = 'block';
      setInterval(() => {
        testimonials[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].style.display = 'block';
      }, 5000);
    }
  
    // Scroll-to-Top Button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    });
  
    // Animate on Scroll (for Cards, Testimonials, Articles)
    const animateOnScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const animateElements = document.querySelectorAll('.card, .testimonial, .article');
      animateElements.forEach(element => {
        if (element.getBoundingClientRect().top + window.scrollY < scrollPosition) {
          element.style.opacity = 1;
          element.style.transform = "translateY(0)";
        }
      });
    };
  
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger animation on page load in case elements are in view.
  
    // Service Content Toggle
    const defaultContent = document.querySelector('.service-content.active');
    if (defaultContent) {
      defaultContent.style.right = '0';
      defaultContent.style.opacity = '1';
      defaultContent.style.display = 'flex';
    }
  
    document.querySelectorAll('.service-btn').forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        document.querySelectorAll('.service-content').forEach(content => {
          content.classList.remove('active');
          content.style.right = '-100%';
          content.style.opacity = '0';
          content.style.display = 'none';
        });
  
        const targetContent = document.querySelector(targetId);
        if (targetContent) {
          targetContent.classList.add('active');
          targetContent.style.display = 'flex';
          setTimeout(() => {
            targetContent.style.right = '0';
            targetContent.style.opacity = '1';
          }, 100);
        }
  
        document.querySelectorAll('.service-btn').forEach(btn => {
          btn.classList.remove('active-btn');
        });
        button.classList.add('active-btn');
      });
    });
  
    // Clickable Image and Link
    const image = document.getElementById('clickable-image');
    if (image) {
      image.addEventListener('click', function() {
        window.location.href = 'your-link.html';
      });
    }
  
    const link = document.getElementById('clickable-link');
    if (link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'your-link.html';
      });
    }
  
    // Clickable Gallery Images and Buttons
    document.querySelectorAll('.gallery-image, .gallery-button').forEach(element => {
      element.addEventListener('click', function() {
        const link = element.getAttribute('data-link');
        if (link) {
          window.location.href = link;
        }
      });
    });
  
    // Burger Menu Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
  
    if (burger && nav) {
      burger.addEventListener('click', function() {
        nav.classList.toggle('active');
      });
    }
  
    // Scroll Animation for Cards
    const cards = document.querySelectorAll('.card');
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };
  
    const onScroll = () => {
      cards.forEach(card => {
        if (isInViewport(card)) {
          card.classList.add('in-view');
        }
      });
    };
  
    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger on load in case any cards are already in view
  });
  