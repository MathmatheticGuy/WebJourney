const toggle =  document.querySelector(".sidebar-toggle-btn");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
