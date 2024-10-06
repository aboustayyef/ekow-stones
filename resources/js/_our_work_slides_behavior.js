document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('#ourWork li');
    const imageDiv = document.getElementById('visible-slide');

    // Add click event listeners to all tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove the 'selected' class from all tabs
            tabs.forEach(t => t.classList.remove('selected'));

            // Add 'selected' class to the clicked tab
            this.classList.add('selected');

            // Get the text content of the clicked tab
            const category = this.textContent.trim().toLowerCase();

            // Change the background image based on the category
            imageDiv.style.backgroundImage = `url('/storage/img/${category}.jpg')`;
        });
    });
});
