import { useEffect, useState } from "react";

import PrevNextCardButtons from "../PrevNextCardButtons/PrevNextCardButtons";
import SignCategories from "../SignCategories/SignCategories";
import PrevNextSectionButtons from "../PrevNextSectionButtons/PrevNextSectionButtons";

import "./SignCardLearn.css";

function LearnSignCard({
  signs,
  sectionedSigns,
  currentIndex,
  setCurrentIndex,
  currentSection,
  setCurrentSection,
  numberOfCardsPerSection,
}) {
  return (
    <section id="sign_card_container">
      <SignCategories signs={sectionedSigns} currentIndex={currentIndex} />

      <img
        src={`./src/assets/sign_images/${sectionedSigns[currentIndex].identifier}.png`}
        alt={sectionedSigns[currentIndex].description}
      />

      <section id="sign_description_container">
        <p>{currentIndex + 1}</p>
        <p>{sectionedSigns[currentIndex].description}</p>
      </section>

      <PrevNextCardButtons
        signs={sectionedSigns}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      <section>
        <p>currentSection: {currentSection}</p>
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
