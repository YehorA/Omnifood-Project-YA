/*dynamic year*/
const year = document.querySelector(".cr-year");
year.textContent = new Date().getFullYear();

/*open/closing of nav bar for phones*/

const btnMob = document.querySelector(".btn-for-mobile");
const header = document.querySelector(".header-page");

btnMob.addEventListener("click", function() {
    header.classList.toggle("nav-open")
})

/*close nav when clicking at links */

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("header-nav-link"))
      header.classList.toggle("nav-open");
  });
});