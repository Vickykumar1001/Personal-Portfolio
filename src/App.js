import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/PreLoader";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <NavBar />
          <Banner />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
