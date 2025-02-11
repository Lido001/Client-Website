function sendmail() {
  emailjs.init("sG3yoGP4gIGpQGBiH"); // Replace with your EmailJS user ID

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      emailjs.sendForm("service_nvsj2ml", "template_grs6s89", this).then(
        function () {
          alert("Message sent successfully!");
        },
        function (error) {
          alert("Failed to send message. Please try again.");
        }
      );
    });
}
