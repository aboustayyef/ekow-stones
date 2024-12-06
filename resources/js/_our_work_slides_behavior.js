document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('#ourWork li');
    const imageDiv = document.getElementById('visible-slide');
    const imageNav = document.getElementById('image-nav');

    // JSON-like variable to store images data
    const imagesData = {
        "countertops": ["counters-1.jpg", "counters-2.jpg"],
        "kitchens": ["kitchens-1.jpg", "kitchens-2.jpg", "kitchens-3.jpg"],
        "walls": ["walls-1.jpg", "walls-2.jpg"],
        "washrooms": ["washrooms.jpg"],
        "basins": ["basins.jpg"]
    };

    // Function to load initial state based on the first tab
    function loadInitialState() {
        const firstTab = tabs[0];
        firstTab.classList.add('selected');
        const category = firstTab.textContent.trim().toLowerCase();
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
                    imageDiv.style.backgroundImage = `url('/storage/img/${img}')`;
                });

                imageNav.appendChild(btn);
            });

            imageNav.classList.remove('hidden'); // Show the submenu
            imageDiv.style.backgroundImage = `url('/storage/img/${images[0]}')`; // Set initial image
        } else {
            // Hide the submenu if there's only one or no image
            imageNav.classList.add('hidden');
            imageDiv.style.backgroundImage = images.length > 0 ? `url('/storage/img/${images[0]}')` : '';
        }
    }

    // Load the initial state when the page is loaded
    loadInitialState();

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
                        imageDiv.style.backgroundImage = `url('/storage/img/${img}')`;
                    });

                    imageNav.appendChild(btn);
                });

                imageNav.classList.remove('hidden'); // Show the submenu
                imageDiv.style.backgroundImage = `url('/storage/img/${images[0]}')`; // Set initial image
            } else {
                // Hide the submenu if there's only one or no image
                imageNav.classList.add('hidden');
                imageDiv.style.backgroundImage = images.length > 0 ? `url('/storage/img/${images[0]}')` : '';
            }
        });
    });
});
