// navbar
const toggle = document.getElementById("toggle");
const ddParent = document.getElementById("dd-parent");

toggle.onclick = () => {
  toggle.classList.toggle("active");
};

ddParent.onclick = () => {
  ddParent.classList.toggle("active");
};
