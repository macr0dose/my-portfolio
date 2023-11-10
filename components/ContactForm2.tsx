// components/ContactForm.js

export default function ContactForm2() {
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent the default form submit
  
      const form = new FormData(event.target);
  
      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(form).toString(),
        });
  
        // Handle the response from the server
        if (response.ok) {
          // Form submission successful, do something like redirect to a thank-you page
          console.log('Form submitted successfully!');
        } else {
          // Handle errors
          console.error('Form submission failed!');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
  
    return (
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
  