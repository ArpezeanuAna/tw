document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Mesajul a fost trimis cu succes!");
        form.reset();
    });
});
