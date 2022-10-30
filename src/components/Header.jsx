
export default function Header() {
  return (
    <header className="header">
      <div className="container header-title">
        <div className="header-content">
          <div className="top-container">
            <h1 className="name">Orpha James</h1>
            <img src="/images/photo.png" className="photo" />
          </div>
          <center>
            <h4 className="headline">Principal Consultant at Audits & QMS Inc.</h4>
            <div className="contact-info">
              <p>(508)-277-5411 | orphajames1@gmail.com</p>
              <img
                src="/images/linkedin.png"
                className="contact-icon"
                onClick={() => window.open("https://www.linkedin.com/in/orpha-james-154b3112/")} />
            </div>
          </center>
        </div>
      </div>
    </header>
  );
}
