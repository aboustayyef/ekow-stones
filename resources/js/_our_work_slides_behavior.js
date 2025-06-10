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

    // Slideshow variables
    let slideshowInterval = null;
    let currentTabIndex = 0;
    let currentImageIndex = 0;
    let isSlideshowActive = true;

    function showTabAndImage(tabIndex, imageIndex) {
        // Remove 'selected' from all tabs
        tabs.forEach(t => t.classList.remove('selected'));
        const tab = tabs[tabIndex];
        tab.classList.add('selected');
        const category = tab.textContent.trim().toLowerCase();
        const images = imagesData[category] || [];
        if (images.length > 1) {
            imageNav.innerHTML = '';
            images.forEach((img, idx) => {
                const btn = document.createElement('button');
                btn.textContent = idx + 1;
                btn.classList.add('image-btn');
                if (idx === imageIndex) btn.classList.add('selected');
                btn.addEventListener('click', function() {
                    stopSlideshow();
                    document.querySelectorAll('.image-btn').forEach(b => b.classList.remove('selected'));
                    this.classList.add('selected');
                    fadeToImage(`/storage/img/${img}`);
                    currentImageIndex = idx;
                });
                imageNav.appendChild(btn);
            });
            imageNav.classList.remove('hidden');
            fadeToImage(`/storage/img/${images[imageIndex]}`);
        } else {
            imageNav.classList.add('hidden');
            fadeToImage(images.length > 0 ? `/storage/img/${images[0]}` : '');
        }
    }

    // Crossfade setup: ensure two layers exist
    function ensureCrossfadeLayers() {
        if (!imageDiv.querySelector('.slide-img-a')) {
            const a = document.createElement('div');
            a.className = 'slide-img-a absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700';
            a.style.opacity = 1;
            a.style.zIndex = 1;
            imageDiv.appendChild(a);
        }
        if (!imageDiv.querySelector('.slide-img-b')) {
            const b = document.createElement('div');
            b.className = 'slide-img-b absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700';
            b.style.opacity = 0;
            b.style.zIndex = 2;
            imageDiv.appendChild(b);
        }
        imageDiv.style.position = 'relative';
        imageDiv.style.overflow = 'hidden';
    }

    // Fade transition helper (crossfade)
    let showingA = true;
    function fadeToImage(newUrl) {
        ensureCrossfadeLayers();
        const a = imageDiv.querySelector('.slide-img-a');
        const b = imageDiv.querySelector('.slide-img-b');
        if (showingA) {
            b.style.backgroundImage = newUrl ? `url('${newUrl}')` : '';
            b.style.transition = 'opacity 0.7s';
            b.style.opacity = 1;
            a.style.transition = 'opacity 0.7s';
            a.style.opacity = 0;
        } else {
            a.style.backgroundImage = newUrl ? `url('${newUrl}')` : '';
            a.style.transition = 'opacity 0.7s';
            a.style.opacity = 1;
            b.style.transition = 'opacity 0.7s';
            b.style.opacity = 0;
        }
        showingA = !showingA;
    }

    function nextSlide() {
        const tab = tabs[currentTabIndex];
        const category = tab.textContent.trim().toLowerCase();
        const images = imagesData[category] || [];
        if (images.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            if (currentImageIndex === 0) {
                // Move to next tab
                currentTabIndex = (currentTabIndex + 1) % tabs.length;
            }
        } else {
            // Only one image, move to next tab
            currentTabIndex = (currentTabIndex + 1) % tabs.length;
            currentImageIndex = 0;
        }
        showTabAndImage(currentTabIndex, currentImageIndex);
    }

    function startSlideshow() {
        if (slideshowInterval) clearInterval(slideshowInterval);
        slideshowInterval = setInterval(nextSlide, 4000); // 4 seconds
        isSlideshowActive = true;
    }

    function stopSlideshow() {
        if (slideshowInterval) clearInterval(slideshowInterval);
        isSlideshowActive = false;
    }

    // Load the initial state when the page is loaded
    loadInitialState();
    showTabAndImage(0, 0);
    startSlideshow();

    // Stop slideshow on any tab or image button click
    tabs.forEach((tab, idx) => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            stopSlideshow();
            currentTabIndex = idx;
            currentImageIndex = 0;
            showTabAndImage(currentTabIndex, currentImageIndex);
        });
    });
    // Also stop on imageNav button click (handled in showTabAndImage)
});
