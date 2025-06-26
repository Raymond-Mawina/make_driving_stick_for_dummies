import { useState } from "react";
import "./App.css";
import signMetadata from "./sign_metadata";
import LearnSignCard from "./components/LearnSignCard/LearnSignCard";
import LeftRightButtons from "./components/LeftRightButtons/LeftRightButtons";

function App() {
  const [signs, _] = useState(signMetadata);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <section id="app_container">
        <section id="sign_category">
          <p>{signs[currentIndex].primary_category}</p>
          <p>{signs[currentIndex].secondary_category}</p>
        </section>

        <LearnSignCard signMetadata={signs[currentIndex]} />
        <LeftRightButtons
          signs={signs}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </section>
    </>
  );
}

export default App;
