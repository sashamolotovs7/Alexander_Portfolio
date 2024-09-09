import resumeFile from '../assets/Resume.pdf';
import './resume.css'; // Import the correct CSS file
import Header from '../components/Header'; // Import the shared Header component

function Resume() {
  return (
    <div className="resume-page">
      <Header /> {/* Include the shared header */}

      <h1>Resume</h1>
      <a href={resumeFile} download="Alexander_Volkov_Resume.pdf" className="download-button">
        Download My Resume
      </a>

      <div className="resume-details">
        {/* Professional Summary Section */}
        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Experienced data analyst and full-stack developer student with over 10 years of aerospace background.
            Proficient in developing dashboards and applications with performance-tuned RDBMS pipelines within 
            manufacturing and emerging data environments. Skilled with analytical concepts, I create data-driven 
            reports using SQL, TypeScript, CSS, HTML, Python, Tableau, Ignition, and various JavaScript frameworks.
          </p>
          <p>
            I use prompt engineering techniques to streamline workflows, enhance data processing, and drive innovative 
            solutions, ensuring efficient execution from concept through to final implementation.
          </p>
        </section>

        {/* Technical Skills Section */}
        <section className="resume-section">
          <h2>Technical Skills</h2>
          <ul>
            <li>Frontend: JavaScript | HTML | CSS | jQuery | BootScrap.js | Chars.js</li>
            <li>Backend: SQL | Postgres | eCQ | MongoDB | AWS | Python | Node.js | Express.js | React.js | TypeScript</li>
            <li>Inquirer | Postgres</li>
            <li>Analytics: Tableau | Ignition | PowerBI</li>
          </ul>
        </section>

        {/* Project Highlights Section */}
        <section className="resume-section">
          <h2>Project Highlights</h2>
          <ul>
            <li>2017: Kickass Award for Lean Manufacturing Greenbelt in Landing Legs, SpaceX</li>
            <li>2018: Kickass Award for Continuous Improvement & critical path planning, SpaceX</li>
            <li>2020: Award for “streamlining Data Analytics,” SAFRAN</li>
            <li>2021: Award for “improving MRP reports,” reducing processing time by over 80%, SAFRAN</li>
            <li>2023: Lift-off Award for “high attention to detail,” Blue Origin</li>
            <li>2023: Lift-off Award for “bias for action and operational excellence,” Blue Origin</li>
          </ul>
        </section>

        {/* Work Experience Section */}
        <section className="resume-section">
          <h2>Work Experience</h2>
          <div className="experience-item">
            <h3>Analyst - Data Insights | Strategy & Planning (SIOP) | Blue Origin</h3>
            <p>January 2023 - Present</p>
            <ul>
              <li>Collaborated with backend developers to implement, improve, and improve API nodes for MRP.</li>
              <li>Supported DevOps with schema audits, suggesting improvements, refining processing speeds, and ensuring data integrity.</li>
              <li>Designed high-performance reports and interactive dashboards to improve production and supply chain alignment.</li>
              <li>Developed Material report, addressing the absence of an MRP and generated actionable messages for planning.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Business Intelligence Analyst | Global Supply Chain | SAFRAN Headquarters</h3>
            <p>October 2022 – January 2023</p>
            <ul>
              <li>Streamlined global reporting by parsing data from various ERP systems using AZURE and Power BI.</li>
              <li>Improved and maintained MRP Action Messages, producing actionable reports across departments.</li>
            </ul>
          </div>

          {/* Add more experiences here */}
        </section>

        {/* Education Section */}
        <section className="resume-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Certificate: Full-Stack Web Development (2024)</h3>
            <p>University of Central Florida, Orlando, FL</p>
          </div>
          <div className="education-item">
            <h3>Bachelor of Science: Business Information Systems</h3>
            <p>University of Redlands, Redlands, CA</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
