document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('#ourWork li');
    const imageDiv = document.getElementById('visible-slide');
    const imageNav = document.getElementById('image-nav');

    // JSON-like variable to store images data
    const imagesData = {
        "countertops": ["/storage/img/countertops.jpg"],
        "kitchens": ["/storage/img/kitchens.jpg","/storage/img/washrooms.jpg"],
        "walls": ["/storage/img/walls.jpg"],
        "washrooms": ["/storage/img/washrooms.jpg"],
        "basins": ["/storage/img/basins.jpg"]
    };

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
            // Check if there are multiple images for the category
            const images = imagesData[category] || [];
            if (images.length > 1) {
                // Show the submenu and populate it
                imageNav.innerHTML = ''; // Clear previous submenu
                images.forEach((img, index) => {
                    const btn = document.createElement('button');
                    btn.textContent = index + 1;
                    btn.classList.add('image-btn');
                    if (index === 0) btn.classList.add('selected');

                    // Add click listener for each button
                    btn.addEventListener('click', function() {
                        // Remove 'selected' class from all buttons
                        document.querySelectorAll('.image-btn').forEach(b => b.classList.remove('selected'));
                        this.classList.add('selected');

                        // Change the background image
                        imageDiv.style.backgroundImage = `url('${img}')`;
                    });

                    imageNav.appendChild(btn);
                });

                imageNav.classList.remove('hidden'); // Show the submenu
                imageDiv.style.backgroundImage = `url('${images[0]}')`; // Set initial image
            } else {
                // Hide the submenu if there's only one or no image
                imageNav.classList.add('hidden');
                imageDiv.style.backgroundImage = images.length > 0 ? `url('${images[0]}')` : '';
            }
        });
    });
});
