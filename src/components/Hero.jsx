import "../css/Hero.css";
import image from "../assets/hero-banner.png";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Create a Professional Resume in Minutes</h1>

          <p>
            Build your resume with modern templates and download it instantly.
          </p>

          <button>Create Resume</button>
        </div>

        <div className="hero-image">
          <img src={image} alt="Resume builder preview" />
        </div>
      </section>

      {/* Resume upload */}
      <section className="resume">

  <div className="resume-option upload-option">
    <div className="time-banner">
      Time Saver!
    </div>

    <h2>Upload your current resume</h2>
    <p>We'll move everything to your new template.</p>
  </div>

  <div className="resume-option">
    <h2>Build a new resume</h2>
    <p>We'll guide you through each section.</p>
  </div>

  <div className="policy">
    <p>
      By clicking any of the above options, you agree to our{" "}
      <a href="#policy">Terms and Conditions</a> and{" "}
      <a href="#privacy">Privacy Policy</a>.
    </p>
  </div>

</section>
    </>
  );
}