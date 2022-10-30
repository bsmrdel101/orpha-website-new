
export default function Nav() {
  const handleSelectHome = () => {
    window.scrollTo(0, 0);
  }

  const handleSelectAbout = () => {
    let element = document.getElementById('about-container');
    element.scrollIntoView();
  }

  const handleSelectSkills = () => {
    let element = document.getElementById('skills-container');
    element.scrollIntoView();
  }

  const handleSelectPublications = () => {
    let element = document.getElementById('publications-container');
    element.scrollIntoView();
  }

  const handleSelectEducation = () => {
    let element = document.getElementById('education-container');
    element.scrollIntoView();
  }

  return (
    <nav>
      <div className="navLink" onClick={handleSelectHome}>
        <p>Home</p>
      </div>
      <div className="navLink" onClick={handleSelectAbout}>
        <p>About Me</p>
      </div>
      <div className="navLink" onClick={handleSelectSkills}>
        <p>Skills</p>
      </div>
      <div className="navLink" onClick={handleSelectPublications}>
        <p>Publications</p>
      </div>
      <div className="navLink" onClick={handleSelectEducation}>
        <p>Education</p>
      </div>
    </nav>
  );
}
  