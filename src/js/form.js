(function () {
    emailjs.init("sG3yoGP4gIGpQGBiH"); // Replace with your EmailJS user ID
  })();

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const sendButton = this.querySelector("button[type=submit]");
    sendButton.disabled = true; // Disable the button to prevent multiple submissions
    sendButton.textContent = "Sending...";


    emailjs.sendForm("service_nvsj2ml", "template_grs6s89", this)
      .then(
        function (response) {
          // Show success popup
          Swal.fire({
            title: "Message Sent!",
            text: "Thank you for reaching out. We'll get back to you soon!",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#3085d6",
          });

          // Reset button and form
          sendButton.disabled = false;
          sendButton.textContent = "BOOK A SCHEDULE";
          document.getElementById("contact-form").reset();
        },
        function (error) {
          // Show error popup
          Swal.fire({
            title: "Error!",
            text: "Failed to send the message. Please try again later.",
            icon: "error",
            confirmButtonText: "Retry",
            confirmButtonColor: "#d33",
          });

          // Reset button
          sendButton.disabled = false;
          sendButton.textContent = "BOOK A SCHEDULE";
        }
      );
  });