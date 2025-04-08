const hamburger = document.getElementById("hamburger");
const navItems = document.getElementById("navItems");
const closeSidebar = document.getElementById("closeSidebar");

hamburger.addEventListener("click", () => {
  navItems.classList.add("open");
});

closeSidebar.addEventListener("click", () => {
  navItems.classList.remove("open");
});
