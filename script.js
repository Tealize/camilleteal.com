addEventListener("load", (event) => {
  document.getElementById("menu-button").addEventListener("click", (event) => {
    document.body.classList.toggle("expanded");
  })
  document.body.classList.add("loaded")
});