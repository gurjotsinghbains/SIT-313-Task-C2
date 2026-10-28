function Footer() {
  return (
    <footer className="footer">

      <div className="footer-columns">

        <div>
          <h4>Explore</h4>
          <p>Home</p>
          <p>Work</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Software Engineering Student</p>
          <p>Chitkara University</p>
          <p>India</p>
        </div>

        <div>
          <h4>Stay connected</h4>

          <div className="social-icons">
            <span>📘</span>
            <span>🐦</span>
            <span>📷</span>
          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>DEV@Deakin 2026</p>

        <div className="footer-legal">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Code of Conduct</span>
        </div>

      </div>

    </footer>
  )
}

export default Footer