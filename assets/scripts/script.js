const transitionDuration = 300
const transitionGap = 10
const menuIcon = document.querySelector(".j_menu_icon")
const menu = document.querySelector(".j_menu")
const isVisible = (element) => window.getComputedStyle(element).display !== "none"
const transitionProps = (property = "all", duration = `${transitionDuration / 1000}s`, timingFunction = "ease", delay = "0s") =>
    `${property} ${duration} ${timingFunction} ${delay}`

function slideDown(element, displayElement = "block") {
    element.style.transition = ""
    element.style.display = displayElement

    let maxHeight = element.offsetHeight

    element.style.overflow = "hidden"
    element.style.maxHeight = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.borderTopWidth = 0
    element.style.borderBottomWidth = 0

    setTimeout(() => {
        element.style.transition = transitionProps()
        element.style.maxHeight = `${maxHeight}px`
        element.style.paddingTop = ""
        element.style.paddingBottom = ""
        element.style.borderTopWidth = ""
        element.style.borderBottomWidth = ""

        setTimeout(() => {
            element.style.overflow = ""
            element.style.transition = ""
        }, transitionDuration - transitionGap)
    }, transitionGap)
}

function slideUp(element, removeElement = false) {
    element.style.transition = transitionProps()
    element.style.overflow = "hidden"
    element.style.maxHeight = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.borderTopWidth = 0
    element.style.borderBottomWidth = 0

    setTimeout(() => {
        element.style.display = "none"
        element.style.maxHeight = ""
        element.style.paddingTop = ""
        element.style.paddingBottom = ""
        element.style.borderTopWidth = ""
        element.style.borderBottomWidth = ""
        element.style.overflow = ""
        element.style.transition = ""
        removeElement && element.remove()
    }, transitionDuration)
}

menuIcon.addEventListener("click", () => {
    if (!isVisible(menu)) {
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