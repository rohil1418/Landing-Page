import "./Features.css";

const features = [
  {
    icon: "⚡",
    title: "Fast",
    text: "Experience a fast and smooth platform designed for better performance.",
  },
  {
    icon: "🔒",
    title: "Secure",
    text: "Your data and information are protected with modern security practices.",
  },
  {
    icon: "✨",
    title: "Simple",
    text: "Easy-to-use interface that anyone can understand and use.",
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-wrap">

        <div className="features-heading">
          <div className="features-icon">
            <i className="fa-solid fa-layer-group"></i>
          </div>

          <h2>Our Features</h2>

          <p>
            Everything you need to create a fast, secure, and simple digital
            experience.
          </p>
        </div>

        <div className="feature-container">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>

              <div className="feature-card-icon">
                {f.icon}
              </div>

              <h3>{f.title}</h3>

              <p>{f.text}</p>

              <div className="feature-arrow">
                <i className="fa-solid fa-arrow-right"></i>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

