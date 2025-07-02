import { useState } from "react";
import "./App.css";
import signMetadata from "./sign_metadata";
import LearnSignCard from "./components/LearnSignCard/LearnSignCard";
import PrevNextButtons from "./components/PrevNextButtons/PrevNextButtons";

function App() {
  const [signs, _] = useState(signMetadata);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <section id="app_container">
        <LearnSignCard
          signs={signs}
          signMetadata={signs[currentIndex]}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </section>
    </>
  );
}

export default App;
