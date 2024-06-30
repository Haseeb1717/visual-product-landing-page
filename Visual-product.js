       let icon = document.querySelector(".icon");
        let ul = document.querySelector("ul");

        icon.addEventListener("click", () => {
            ul.classList.toggle("active");
            if (ul.className.includes("active")) {
                document.getElementById("menu-bar").className = "ri-close-fill";
            } else {
                document.getElementById("menu-bar").className = "ri-menu-fill";
            }
        });
        AOS.init({
    duration: 800 // Set your desired speed here (in milliseconds)
  });
