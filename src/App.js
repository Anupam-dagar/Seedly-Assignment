import React from "react";
import NavigationBar from "./Components/NavigationBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Advertisement from "./Components/Advertisement";
import QuestionFeed from "./Components/Questionfeed";
import { Jumbotron, Container } from "react-bootstrap";
import "./style.scss";
import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Header />
      <Jumbotron fluid className="mb-0 pt-3">
        <Container>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
              <Sidebar />
            </div>
            <div className="ml-3 flex-fill">
              <QuestionFeed />
            </div>
            <div className="ml-3 d-none d-lg-block">
              <Advertisement />
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Footer />
    </>
  );
}

export default App;
