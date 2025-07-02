import PrevNextButtons from "../PrevNextButtons/PrevNextButtons";
import SignCategories from "../SignCategories/SignCategories";
import "./SignCardLearn.css";

function LearnSignCard({ signs, signMetadata, currentIndex, setCurrentIndex }) {
  return (
    <section id="sign_card_container">
      <SignCategories signs={signs} currentIndex={currentIndex} />

      <img
        src={`./src/assets/sign_images/${signMetadata.identifier}.png`}
        alt={signMetadata.description}
      />

      <section id="sign_description_container">
        <p>{currentIndex + 1}</p>
        <p>{signMetadata.description}</p>
      </section>

      <PrevNextButtons
        signs={signs}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </section>
  );
}

export default LearnSignCard;
