import { animate } from "framer-motion";

const menuBtn = document.getElementById("menu-btn") as HTMLButtonElement;
const mobileMenu = document.getElementById("mobile-menu") as HTMLButtonElement;

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");

        if (!mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("animate-slideDown");
        } else {
            mobileMenu.classList.remove("animate-slideDown");
        }
    });
}