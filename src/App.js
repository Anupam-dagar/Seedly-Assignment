import React from "react";
import NavigationBar from "./Components/NavigationBar";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import { Jumbotron } from "react-bootstrap";
import "./style.scss";
import "./App.css";

function App() {
  return (
    <div>
      <NavigationBar />
      <Header />
      <Jumbotron fluid className="mb-0">
        <div class="d-flex justify-content-center">
          <div className="bd-highlight">
            <h2>Let's Talk Finance</h2>
          </div>
          <div className="bd-highlight">
            <h2>Let's Talk Finance</h2>
          </div>
          <div className="bd-highlight">
            <h2>Let's Talk Finance</h2>
          </div>
        </div>
      </Jumbotron>
      <Footer/>
    </div>
  );
}

export default App;
