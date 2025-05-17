// Scroll to the "ourWorkSection" when any element with the class "seeOurWork" is clicked
document.querySelectorAll('.seeOurWork').forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        document.getElementById('ourWorkSection').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to the "aboutUsSection" when any element with the class "seeOurWork" is clicked
document.querySelectorAll('.learnAboutUs').forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        document.getElementById('aboutUsSection').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Scroll to the "contactUsSection" when any element with the class "seeOurWork" is clicked
document.querySelectorAll('.contactUs').forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        document.getElementById('contactUsSection').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll back to the <nav> when any element with the class "backToTop" is clicked
document.querySelectorAll('.backToTop').forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        console.log('backToTop clicked');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
