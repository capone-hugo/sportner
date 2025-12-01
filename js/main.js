// Init AOS
AOS.init({ duration: 800, once: true, offset: 50 });

// Navbar Scroll
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
        nav.classList.replace('h-20', 'h-16');
    } else {
        nav.classList.remove('shadow-md');
        nav.classList.replace('h-16', 'h-20');
    }
});

// --- Mobile Menu Logic (Vertical Dropdown) ---
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    }
}

menuBtn.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    });
});

// --- FAQ Logic ---
function toggleMasterFaq() {
    const container = document.getElementById('faq-master-container');
    const icon = document.getElementById('master-faq-icon');
    const btnText = document.getElementById('master-btn-text');
    
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
        btnText.innerText = "Masquer les questions";
    } else {
        container.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
        btnText.innerText = "Afficher les 10 questions";
        document.getElementById('master-faq-btn').scrollIntoView({behavior: 'smooth', block: 'center'});
    }
}

function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.faq-btn').forEach(btn => {
        if (btn !== button) {
            btn.setAttribute('aria-expanded', 'false');
            btn.nextElementSibling.classList.remove('active');
        }
    });

    button.setAttribute('aria-expanded', !isExpanded);
    if (!isExpanded) {
        answer.classList.add('active');
    } else {
        answer.classList.remove('active');
    }
}
