import './portfolio.css'; // Import the portfolio page styles
import Header from '../components/Header'; // Import the shared Header component
import project1Image from '../assets/imgs/pr1.jpg'; // Example project images
import project2Image from '../assets/imgs/pr2.jpg';
import project3Image from '../assets/imgs/pr3.jpg';

function Portfolio() {
  return (
    <div className="portfolio-page">
      <Header /> {/* Use the common header */}
      <h1>Portfolio</h1>
      <div className="projects-grid">
        <div className="project-item">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={project1Image} alt="Project 1" />
          </a>
          <h3>Project 1: Image Description</h3> {/* Image name */}
          <p>This is a short description of Project 1.</p> {/* Short description */}
        </div>
        <div className="project-item">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={project2Image} alt="Project 2" />
          </a>
          <h3>Project 2: Image Description</h3> {/* Image name */}
          <p>This is a short description of Project 2.</p> {/* Short description */}
        </div>
        <div className="project-item">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img src={project3Image} alt="Project 3" />
          </a>
          <h3>Project 3: Image Description</h3> {/* Image name */}
          <p>This is a short description of Project 3.</p> {/* Short description */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
