import "./Faq.css";

const faqs = [
  {
    q: "How long does onboarding take?",
    a: "Most studios are fully set up within two weeks, including a cleanup of your last 12 months of transactions.",
  },
  {
    q: "Do you work with our existing accountant?",
    a: "Yes. We hand off clean, reconciled books each quarter so your tax preparer can file with minimal back-and-forth.",
  },
  {
    q: "What if we outgrow the Solo plan?",
    a: "You can switch plans any time — we'll prorate the difference for the current billing cycle.",
  },
  {
    q: "Is there a contract or lock-in period?",
    a: "No. It's month to month, and you can cancel any time with 30 days' notice.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="faq-section">
      <div className="wrap">

        <div className="faq-heading">
          <div className="faq-icon">
            <i className="fa-solid fa-person-circle-question"></i>
          </div>

          <h2>Frequently Asked Questions</h2>

          <p>
            Find answers to the most common questions about our platform,
            plans, and services.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <div className="faq-item" key={item.q}>
              <details>
                <summary>
                  <span>{item.q}</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </summary>

                <p>{item.a}</p>
              </details>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
