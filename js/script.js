//Back to top button script
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

//Smoothe scrolling
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//Smoothe scroll for navifation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


//Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
	event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
		let address = document.getElementById("address").value;
		let telephone = document.getElementById("telephone").value;
        let message = document.getElementById("message").value;
        let error = "";

        if (name === "" || address === "" || telephone === "" || message === "") {
			alert("Please fill out all fields before submitting.");
			return;
		}
		alert("Thank you " + name + "! Message has been sent.");
});


//Places the year automatically
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
