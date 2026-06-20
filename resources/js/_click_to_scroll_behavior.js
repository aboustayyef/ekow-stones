// Scroll to the "ourWorkSection" when any element with the class "js-scroll-work" is clicked
document.querySelectorAll('.js-scroll-work').forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        document.getElementById('ourWorkSection').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to the "aboutUsSection" when any element with the class "js-scroll-about" is clicked
document.querySelectorAll('.js-scroll-about').forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        document.getElementById('aboutUsSection').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to the "contactUsSection" when any element with the class "js-scroll-contact" is clicked
document.querySelectorAll('.js-scroll-contact').forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        document.getElementById('contactUsSection').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll back to the <nav> when any element with the class "js-scroll-top" is clicked
document.querySelectorAll('.js-scroll-top').forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
