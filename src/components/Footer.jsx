import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>ResumePro</h2>
          <p>
            Create professional resumes quickly with modern templates.
          </p>
        </div>


        {/* Links */}
        <div className="footer-links">
          <div>
            <h3>Product</h3>
            <a href="#templates">Templates</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div>
            <h3>Company</h3>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Reviews</a>
          </div>

          <div>
            <h3>Legal</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 ResumePro. All rights reserved.
        </p>
      </div>

    </footer>
  );
}