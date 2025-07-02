import { useState } from "react";

import "./App.css";
import signMetadata from "./sign_metadata";
import SignCardLearn from "./components/SignCardLearn/SignCardLearn";

function App() {
  const [signs, _] = useState(signMetadata);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <section id="app_container">
        <SignCardLearn
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
