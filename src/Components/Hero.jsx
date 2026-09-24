import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap">

        <div className="hero-content">
          <div className="hero-text">
            <h1>Build Something Amazing</h1>

            <p>
              Create beautiful and powerful digital experiences with a simple,
              modern and easy-to-use platform.
            </p>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Coding workspace"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
