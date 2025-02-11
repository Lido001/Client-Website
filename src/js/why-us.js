
  document.addEventListener('DOMContentLoaded', () => {
    const duration = 1500; 
    const employeeCount = 500; 
    const customerCount = '+' + 100;
    const supportCount = 50;
    const usersCount = '+' + 100000;
    const counterElement = document.getElementById('employeeCount');
    const customerElement = document.getElementById('customerCount');
    const supportElement = document.getElementById('supportCount');
    const userElement = document.getElementById('usersCount');
    let startTimestamp = null;

    const animateCounter = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      counterElement.textContent = Math.floor(progress * employeeCount);
      counterElement.textContent = Math.floor(progress * employeeCount);
      customerElement.textContent = Math.floor(progress * customerCount);
      supportElement.textContent = Math.floor(progress * supportCount);
      userElement.textContent = Math.floor(progress * usersCount);

      if (progress < 1) {
        window.requestAnimationFrame(animateCounter);
      } else {
        counterElement.textContent = employeeCount; 
        customerElement.textContent = customerCount;
        supportElement.textContent = supportCount;
        userElement.textContent = usersCount;
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.requestAnimationFrame(animateCounter);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(counterElement);
  }); 
  
 
  const textArray = ["TAMILLOFT","siva"];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    const typeWriterElement = document.getElementById('typewriter');

    function typeWriter() {
        if (currentCharIndex < textArray[currentTextIndex].length) {
            typeWriterElement.textContent += textArray[currentTextIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeWriter, 150); // Adjust typing speed here
        } else {
            setTimeout(() => {
                currentTextIndex = (currentTextIndex + 1) % textArray.length; // Loop through the textArray
                currentCharIndex = 0;
                typeWriterElement.textContent = ''; // Clear the text before typing the next one
                typeWriter(); // Start typing the next text
            }, 1000); // Delay before starting the next text
        }
    }

    typeWriter(); // Start the typing effect