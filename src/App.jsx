import { useEffect, useState } from "react";

import "./App.css";
import signMetadata from "./sign_metadata";
import SignCardLearn from "./components/SignCardLearn/SignCardLearn";

function App() {
  const [signs, setSigns] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const [sectionedSigns, setSectionedSigns] = useState([]);
  const [numberOfCardsPerSection, setNumberOfCardsPerSection] = useState(10);
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const newSectionStartValue =
      currentSection * numberOfCardsPerSection - numberOfCardsPerSection;

    const newSectionEndValue = currentSection * numberOfCardsPerSection - 1;

    setSectionedSigns(
      signs.slice(
        newSectionStartValue,
        newSectionEndValue > signs.length ? signs.length : newSectionEndValue
      )
    );

    setCurrentIndex(0);
  }, [currentSection]);

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
    setSectionedSigns([...shuffledArray.slice(0, 9)]);
  }, []);

  return (
    <>
      <section id="app_container">
        {currentIndex !== -1 && (
          <SignCardLearn
            signs={signs}
            sectionedSigns={sectionedSigns}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            numberOfCardsPerSection={numberOfCardsPerSection}
          />
        )}
      </section>
    </>
  );
}

export default App;
