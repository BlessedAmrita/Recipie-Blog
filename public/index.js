const menu_icon = document.getElementById("menu-icon");
const menu_list = document.getElementById("menu-list");
menu_icon.addEventListener("click", () => {
  if (menu_list.classList.contains("hidden")) {
    menu_list.classList.remove("hidden");
    menu_list.classList.add("flex")
  } else menu_list.classList.add("hidden");
});
