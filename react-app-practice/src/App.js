import React from "react"; 
import './App.css';
import Title from "./components/Title/Title.js";
import Header from "./components/Header/Header.js";


function App() {
  return (
    <div className="App">
      <nav>
        <Title /> 
        <ul className="contact-info">
          Contact for Collabs: 
          <li>
            Email: {" "}
            <a href="mailto:bajandernoa@gmail.com" 
            target="_blank"
            rel="noreferrer">
              bajandernoa@gmail.com
            </a>
          </li>
          <li>
            LinkedIn: {" "}
            <a href="https://www.linkedin.com/in/barbara-jandernoa/" 
            target="_blank"
            rel="noreferrer">
              Barbara Jandernoa
            </a>
          </li>
          <li>
            Insta:  {" "}
            <a href="https://www.instagram.com/becomingbabs/" 
            target="_blank"
            rel="noreferrer">
              @becomingbabs
            </a>
          </li>
        </ul>
      </nav>

      <Header /> 
    </div>
  );
}

export default App;
