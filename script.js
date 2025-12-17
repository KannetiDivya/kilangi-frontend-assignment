// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Close menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Category Tabs
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Add animation effect
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });
});

// Color Options
const colorOptions = document.querySelectorAll('.color');

colorOptions.forEach(color => {
    color.addEventListener('click', (e) => {
        // Remove active from siblings
        const siblings = e.target.parentElement.querySelectorAll('.color');
        siblings.forEach(sibling => sibling.classList.remove('active'));
        
        // Add active to clicked
        e.target.classList.add('active');
    });
});

// Product Card Hover Effect with Image Zoom
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 15px 50px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
});

// Scroll to Top on Page Load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Button Ripple Effect
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Search Box Enhancement
const searchInput = document.querySelector('.search-box input');

searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.transform = 'scale(1.02)';
    searchInput.parentElement.style.transition = 'transform 0.3s';
});

searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.transform = 'scale(1)';
});

// Collection Items Hover Effect
const collectionItems = document.querySelectorAll('.collection-item');

collectionItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('img').style.transform = 'scale(1.1)';
        item.querySelector('img').style.transition = 'transform 0.5s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('img').style.transform = 'scale(1)';
    });
});

// Testimonial Auto Slider
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    if (testimonialCards.length > 0) {
        testimonialCards.forEach((card, index) => {
            if (index === currentTestimonial) {
                card.style.transform = 'scale(1.05)';
                card.style.transition = 'transform 0.5s ease';
            } else {
                card.style.transform = 'scale(1)';
            }
        });
        
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    }
}

// Rotate testimonials every 3 seconds
setInterval(rotateTestimonials, 3000);

// Product Card Quick View (Enhanced Interaction)
productCards.forEach(card => {
    let hoverTimeout;
    
    card.addEventListener('mouseenter', () => {
        hoverTimeout = setTimeout(() => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        }, 200);
    });
    
    card.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        card.style.transform = '';
    });
});

// Scroll Progress Indicator
const scrollIndicator = document.createElement('div');
scrollIndicator.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #2C5F4F, #f4d03f);
    z-index: 9999;
    transition: width 0.2s ease;
`;
document.body.appendChild(scrollIndicator);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollIndicator.style.width = scrolled + '%';
});

// Gift Buttons Hover Effect
const giftButtons = document.querySelectorAll('.gift-btn');

giftButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
        button.style.boxShadow = '';
    });
});

// Parallax Effect for Hero Images
//window.addEventListener('scroll', () => {
   // const heroImages = document.querySelectorAll('.hero-images img');
   // const scrolled = window.pageYOffset;
    
   // heroImages.forEach((img, index) => {
      //  const speed = 0.5 + (index * 0.1);
      //  img.style.transform = `translateY(${scrolled * speed}px)`;
   // });
//});
// Controlled Parallax Effect for Hero Images (LIMITED)
window.addEventListener('scroll', () => {
    const heroImages = document.querySelectorAll('.hero-images img');
    const scrolled = window.pageYOffset;

    heroImages.forEach((img, index) => {
        const speed = 0.15 + (index * 0.05); // slower
        const maxTranslate = 40; // limit movement

        let translateY = scrolled * speed;
        if (translateY > maxTranslate) translateY = maxTranslate;

        img.style.transform = `translateY(${translateY}px)`;
    });
});


// Initialize all animations on load
window.addEventListener('load', () => {
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
    
    // Animate hero section
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.animation = 'fadeInUp 1s ease forwards';
    }
});

// Add fadeInUp animation
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(animationStyle);

// Console message for developers
console.log('%c🎨 Kilangi Jewellery', 'color: #2C5F4F; font-size: 20px; font-weight: bold;');
console.log('%cDesigned with ❤️ for GOTI Frontend Assignment', 'color: #666; font-size: 12px;');

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`⚡ Page loaded in ${Math.round(loadTime)}ms`);
});