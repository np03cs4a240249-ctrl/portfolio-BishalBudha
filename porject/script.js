

const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
   
    navLinks.classList.toggle('open');

    
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰'; 
}


menuButton.addEventListener('click', toggleMenu);


navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu();
        }
    });
});





const scrollBar = document.createElement('div');
scrollBar.id = 'scroll-progress';
scrollBar.style.position = 'fixed';
scrollBar.style.top = '0';
scrollBar.style.left = '0';
scrollBar.style.height = '5px';
scrollBar.style.width = '0';
scrollBar.style.background = '#00adee';
scrollBar.style.zIndex = '2000';
document.body.appendChild(scrollBar);

function updateScrollIndicator() {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    const scrollPercent = (scrollTop / (documentHeight - viewportHeight)) * 100;
    scrollBar.style.width = scrollPercent + "%";
}

window.addEventListener('scroll', updateScrollIndicator);




const contactForm = document.getElementById('contact-form-id');  
const messageDiv = document.getElementById('form-message');      

if (contactForm && messageDiv) {

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();  

        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();

        if (nameInput === '' || emailInput === '') {
            messageDiv.textContent = 'Please fill out all required fields.';
            messageDiv.style.color = 'red';
        } else {
            messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.';
            messageDiv.style.color = 'green';
            contactForm.reset(); 
        }
    });
}
