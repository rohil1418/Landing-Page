import "./Contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <div className="contact-heading">
          <div className="contact-icon">
            <i className="fa-solid fa-circle-user"></i>
          </div>
          <h2>Contact Us</h2>
          <p>
            Leave your information and we'll send you a sample monthly report.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              className="contact-input"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input
              className="contact-input"
              type="tel"
              placeholder="Enter your contact number"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              className="contact-input"
              type="email"
              placeholder="rohil@gmail.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              className="description"
              placeholder="Tell us how we can help you..."
              rows="5"
            ></textarea>
          </div>

          <button className="contact-btn" type="submit">
            Submit
            <i className="fa-solid fa-arrow-right"></i>
          </button>

        </form>
      </div>
    </section>
  );
}

