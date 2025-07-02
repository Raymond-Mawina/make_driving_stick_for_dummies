import { useEffect, useState } from "react";

import PrevNextCardButtons from "../PrevNextCardButtons/PrevNextCardButtons";
import SignCategories from "../SignCategories/SignCategories";
import PrevNextSectionButtons from "../PrevNextSectionButtons/PrevNextSectionButtons";

import "./SignCardLearn.css";

function LearnSignCard({ signs, currentIndex, setCurrentIndex }) {
  const [sectionedSigns, setSectionedSigns] = useState([...signs.slice(0, 9)]);
  const [numberOfCardsPerSection, setNumberOfCardsPerSection] = useState(10);
  const [currentSection, setCurrentSection] = useState(1);
  const [sectionStart, setSectionStart] = useState(0);
  const [sectionEnd, setSectionEnd] = useState(9);

  useEffect(() => {
    const newSectionStartValue =
      currentSection * numberOfCardsPerSection - numberOfCardsPerSection;
    setSectionStart(newSectionStartValue);

    const newSectionEndValue = currentSection * numberOfCardsPerSection - 1;
    setSectionEnd(
      newSectionEndValue > signs.length ? signs.length : newSectionEndValue
    );

    // setSectionedSigns(
    //   signs.slice(
    //     newSectionStartValue,
    //     newSectionEndValue > signs.length ? signs.length : newSectionEndValue
    //   )
    // );

    // setCurrentIndex(newSectionStartValue);
  }, [currentSection]);

  return (
    <section id="sign_card_container">
      <SignCategories signs={sectionedSigns} currentIndex={currentIndex} />

      <img
        src={`./src/assets/sign_images/${signs[currentIndex].identifier}.png`}
        alt={signs[currentIndex].description}
      />

      <section id="sign_description_container">
        <p>{currentIndex + 1}</p>
        <p>{signs[currentIndex].description}</p>
      </section>

      <PrevNextCardButtons
        signs={sectionedSigns}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      <section>
        <p>currentSection: {currentSection}</p>
        <p>sectionStart: {sectionStart}</p>
        <p>sectionEnd: {sectionEnd}</p>
      </section>

      <PrevNextSectionButtons
        signs={signs}
        numberOfCardsPerSection={numberOfCardsPerSection}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </section>
  );
}

export default LearnSignCard;
