import { slideDown, slideUp } from "./effects.js"

const menuIcon = document.querySelector(".j_menu_icon")
const menu = document.querySelector(".j_menu")
const isVisible = (element) => window.getComputedStyle(element).display !== "none"

export default function MenuCollapse() {
    menuIcon.addEventListener("click", () => {
        if(!isVisible(menu)) {
            slideDown(menu)
        } else {
            slideUp(menu)
        }
    })

    window.addEventListener("resize", () => {
        if (window.outerWidth >= 900) {
            menu.style.display = ""
        }
    })
}