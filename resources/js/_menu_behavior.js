// Select the necessary elements
const hamburgerButton = document.getElementById('hamburgerbutton');
const closeButton = document.getElementById('closebutton');
const menu = document.getElementById('menu');

// Function to open the menu
function openMenu() {
    menu.classList.remove('hidden'); // Show the menu
    hamburgerButton.classList.add('hidden'); // Hide the hamburger button
    closeButton.classList.remove('hidden'); // Show the close button
}

// Function to close the menu
function closeMenu() {
    menu.classList.add('hidden'); // Hide the menu
    closeButton.classList.add('hidden'); // Hide the close button
    hamburgerButton.classList.remove('hidden'); // Show the hamburger button
}

// Add event listeners to the buttons
hamburgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

// when a link is clicked, close the menu
document.querySelectorAll('ul#menu > li > a').forEach(link => {
    link.addEventListener('click', closeMenu);
});
