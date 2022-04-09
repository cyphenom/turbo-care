var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var disabled_sidebar = document.querySelector(".disabled-sidebar");
var mobile_sidebar = document.querySelector(".mobile-sidebar");
var container = document.querySelector(".container");
var dismiss = document.querySelector("#dismiss");
var overlay = document.querySelector(".overlay");

menuIcon.onclick = function () {
    if (!sidebar ? disabled_sidebar : sidebar.classList.contains("disabled-sidebar")) {
        mobile_sidebar.classList.add('__active');
        overlay.classList.add('active');
    } else if (!window.matchMedia("(max-width: 1300px)").matches) {
        sidebar.classList.toggle("small-sidebar");
        container.classList.toggle("large-container");
    } else {
        mobile_sidebar.classList.add('__active');
        overlay.classList.add('active');
    }
}

overlay.onclick = function () {
    mobile_sidebar.classList.remove('__active');
    overlay.classList.remove('active');
    sidebar.classList.remove('mobile-sidebar');
}