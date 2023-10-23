import React from "react";
import "./App.css";
function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Pamisetty Pujitha</h1>
      </header>

      <div className="content">
        <section className="section">
          <h2>Introduction</h2>
          <p>
            I'm P.Pujitha, a B.Tech student with a passion for Artificial
            Intelligence and Machine Learning,from VIT-AP
          </p>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Data Structures</li>
            <li>HTML,CSS,JavaScript,React.js,Node.js</li>
            <li>SQL,MongoDb</li>
          </ul>
        </section>

        <section className="section">
          <h2>Projects</h2>
          <ul>
            <li>Online movie ticket booking system</li>
            <li>FingerPrint Door Unlock System</li>
            <li>Automatic distance detection</li>
          </ul>
        </section>
        <section className="section">
          <h2>Certifications</h2>
          <ul>
            <li>AWS Academy Graduate - AWS Academy Cloud Foundations</li>
            <li>
              React - The Complete Guide 2023 (incl. React Router & Redux)
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>Contact</h2>
          <a href="mailto:poojithapamisetty@gmail.com">Email me</a>
        </section>
      </div>
    </div>
  );
}

export default App;