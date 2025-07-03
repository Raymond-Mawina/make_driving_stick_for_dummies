import "./PrevNextSectionButtons.css";

function PrevNextSectionButtons({
  signs,
  numberOfCardsPerSection,
  currentSection,
  setCurrentSection,
}) {
  function handleNextSectionClick() {
    const maxNumberOfSections =
      signs.length % numberOfCardsPerSection === 0
        ? Math.floor(signs.length / numberOfCardsPerSection)
        : Math.round(signs.length / numberOfCardsPerSection);

    console.log("maxNumberOfSections: ", maxNumberOfSections);

    if (currentSection < maxNumberOfSections) {
      setCurrentSection((prev) => prev + 1);
    }

    console.log("next section button clicked");
  }

  function handlePrevSectionClick() {
    setCurrentSection((prev) => (prev > 1 ? prev - 1 : prev));

    console.log("prev section button clicked");
  }

  return (
    <section id="section_buttons_container">
      <button
        onClick={() => {
          handlePrevSectionClick();
        }}
      >
        prev section
      </button>
      <button
        onClick={() => {
          handleNextSectionClick();
        }}
      >
        next section
      </button>
    </section>
  );
}

export default PrevNextSectionButtons;
