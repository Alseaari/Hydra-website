const tooltip = document.getElementById("tooltip");
document.addEventListener("mousemove", (e) => {
    tooltip.style.left = (e.clientX + 16) + "px";
    tooltip.style.top = (e.clientY + 16) + "px";
    tooltip.classList.add("show");
});
const eyeBtn = document.getElementById("eyeBtn");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
function openModal() {
    overlay.classList.add("active");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}
function closeModal() {
    overlay.classList.remove("active");
    modal.classList.remove("active");
    document.body.style.overflow = "";
}
eyeBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});