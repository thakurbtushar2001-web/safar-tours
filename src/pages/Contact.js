function Contact() {
  return (
    <div className="contact">

      <h1>Contact Us</h1>

      <p>We'd love to hear from you.</p>

      <div className="contact-box">

        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Email Address" />

        <input type="text" placeholder="Phone Number" />

        <textarea placeholder="Your Message"></textarea>

        <button>Send Message</button>

      </div>

    </div>
  );
}

export default Contact;