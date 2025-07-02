import { useEffect, useState } from "react";

import "./App.css";
import signMetadata from "./sign_metadata";
import SignCardLearn from "./components/SignCardLearn/SignCardLearn";

function App() {
  const [signs, setSigns] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    function shuffleArray(array) {
      let currentIndex = array.length;

      while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }

    const shuffledArray = [...shuffleArray([...signMetadata])];
    setSigns(shuffledArray);
    setCurrentIndex(0);
  }, []);

  return (
    <>
      <section id="app_container">
        {currentIndex !== -1 && (
          <SignCardLearn
            signs={signs}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
      </section>
    </>
  );
}

export default App;
