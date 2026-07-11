document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Dom Elements
    const header = document.querySelector('.site-header');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // 1. Sticky Header Scroll Effect
    const handleHeaderScroll = () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); // Call once on load

    // 2. Mobile Burger Menu Toggle
    const toggleMobileMenu = () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
        
        // Prevent body scrolling when menu is open
        if (navMenu.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const closeMobileMenu = () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking nav links (crucial for anchor scroll)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Close mobile menu if window is resized above tablet breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // 3. Smooth Scroll Navigation with Sticky Header Offset Adjustment
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Allow external links (or non-anchor links) if present
            if (!targetId.startsWith('#')) return;
            
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active class immediately
                navLinks.forEach(item => item.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // 4. Scrollspy: Highlight Active Nav Link based on current scroll position
    const scrollSpy = () => {
        const scrollPosition = window.scrollY + header.offsetHeight + 100; // Offset padding

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', scrollSpy);
    scrollSpy(); // Call on load to set initial state

});
