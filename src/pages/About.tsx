import './About.css';
import Header from '../components/Header'; // Import the Header component
import iconImage from '../assets/imgs/MyPicture.png'; // Import icon
import githubIcon from '../assets/imgs/github.png'; // Import GitHub icon
import linkedinIcon from '../assets/imgs/linkedin.png'; // Import LinkedIn icon
import htmlIcon from '../assets/imgs/html.png'; // Add these icons for marquee
import cssIcon from '../assets/imgs/css.png';
import jsIcon from '../assets/imgs/javascript.png';
import reactIcon from '../assets/imgs/react.png';
import azureIcon from '../assets/imgs/azure.png';
import vscodeIcon from '../assets/imgs/vscode.png';

function About() {
  return (
    <div className="about-page">
      <Header /> {/* Use the header component here */}

      <div className="about-container">
        {/* Left (blue container with text and contact button) */}
        <div className="about-left">
          <div className="about-box">
            <h2>About Me</h2>
            <p>
              Hi, I'm Alexander Volkov, an experienced data analyst and full-stack developer
              with a passion for building scalable solutions. With a strong background in
              aerospace and manufacturing, I specialize in data-driven decisions and
              application development using modern tools and frameworks.
            </p>
            <p>
              I'm proficient in languages and technologies like SQL, JavaScript, Python,
              React, and Node.js. I'm also experienced in using tools like Tableau,
              PowerBI, and AWS. In my spare time, I enjoy contributing to open-source
              projects and learning about the latest advancements in AI.
            </p>

            <div className="social-links">
              <a href="#">
                <img src={githubIcon} alt="GitHub" width="48" />
              </a>
              <a href="#">
                <img src={linkedinIcon} alt="LinkedIn" width="48" />
              </a>
            </div>

            <a href="mailto:hello@example.com" className="contact-me">Contact Me</a>
          </div>
        </div>

        {/* Right (dark blue container with icon) */}
        <div className="about-right">
          <div className="blue-container">
            <img src={iconImage} alt="Icon" className="about-icon" />
          </div>
        </div>
      </div>

      {/* Marquee section */}
      <section className="logos container">
        <div className="marquee">
          <div className="track">
            <img src={htmlIcon} alt="HTML" width="128" />
            <img src={cssIcon} alt="CSS" width="128" />
            <img src={jsIcon} alt="JavaScript" width="128" />
            <img src={reactIcon} alt="React" width="128" />
            <img src={azureIcon} alt="Azure" width="128" />
            <img src={vscodeIcon} alt="VS Code" width="128" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
