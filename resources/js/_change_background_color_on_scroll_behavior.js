document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    if (!nav) return;
    const navOffset = nav.offsetTop;
    window.addEventListener("scroll", function () {
        if (window.scrollY > navOffset) {
            document.body.classList.add("bg-gray-50");
            nav.classList.add("shadow-md");
        } else {
            document.body.classList.remove("bg-gray-50");
            nav.classList.remove("shadow-md");
        }
    });
});
