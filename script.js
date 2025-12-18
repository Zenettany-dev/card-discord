const navItems = document.querySelectorAll(".nav-item")
const contentSections = document.querySelectorAll(".content-section")

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"))

    item.classList.add("active")

    contentSections.forEach((section) => section.classList.remove("active"))

    const sectionId = item.getAttribute("data-section")
    document.getElementById(sectionId).classList.add("active")
  })
})

const copyButtons = document.querySelectorAll(".copy-btn[data-copy]")
const toast = document.getElementById("toast")

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const textToCopy = button.getAttribute("data-copy")

    try {
      await navigator.clipboard.writeText(textToCopy)
      showToast()
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  })
})

function showToast() {
  toast.classList.add("show")

  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)
}

const primaryBtn = document.querySelector(".primary-btn")
if (primaryBtn) {
  primaryBtn.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"))
    const contactNav = document.querySelector('[data-section="contact"]')
    contactNav.classList.add("active")

    contentSections.forEach((section) => section.classList.remove("active"))
    document.getElementById("contact").classList.add("active")
    document.querySelector(".main-content").scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

document.querySelector(".sidebar").addEventListener("wheel", (e) => {
  e.currentTarget.scrollTop += e.deltaY
})
