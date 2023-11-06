function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


    window.addEventListener("load", () => {
        document.querySelector(".loading").classList.add("loading--hidden");
    });

