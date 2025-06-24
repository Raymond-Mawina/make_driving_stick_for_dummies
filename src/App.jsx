import { useState } from "react";
import "./App.css";
import signMetadata from "./sign_metadata";

function App() {
  const [signs, setSigns] = useState(signMetadata);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <section id="app_container">
        <section>
          <img
            src={`./src/assets/sign_images/${signs[currentIndex].identifier}.png`}
            alt={signs[currentIndex].description}
          />
        </section>
        <p>{signs[currentIndex].description}</p>
        <section id="button_container">
          <button
            onClick={() => {
              console.log("left clicked");
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
              }
            }}
          >
            {"<--"} left
          </button>
          <button
            onClick={() => {
              console.log("right clicked");
              if (currentIndex < signs.length - 1) {
                setCurrentIndex(currentIndex + 1);
              }
            }}
          >
            right {"-->"}
          </button>
        </section>
      </section>
    </>
  );
}

export default App;
