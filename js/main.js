let Nav = document.querySelector("[data-header]");
let MenuOpen = document.querySelector("[data-MenuBtn]");
let MenuClose = document.querySelector("[data-CloseBtn]");
let MobNav = document.querySelector("[data-Mobnav]");

const HandelScroll = () => {
    if (window.scrollY > 0) {
        Nav.style.position = "sticky";
        Nav.style.top = "0"
    } else {
        Nav.style.position = "relative";
    }
}

window.addEventListener('scroll', HandelScroll)



MenuOpen.addEventListener("click", () => {
MobNav.style.left = "0";
});

MenuClose.addEventListener("click", () => {
MobNav.style.left = "-100%";
});

function MenuLink() {
    MobNav.style.left = "-100%";
}