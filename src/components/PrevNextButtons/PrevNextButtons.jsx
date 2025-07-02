import "./PrevNextButtons.css";

function PrevNextButtons({ signs, setCurrentIndex, currentIndex }) {
  return (
    <section id="button_container">
      <button
        onClick={() => {
          if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
          }
        }}
      >
        prev
      </button>
      <button
        onClick={() => {
          if (currentIndex < signs.length - 1) {
            setCurrentIndex(currentIndex + 1);
          }
        }}
      >
        next
      </button>
    </section>
  );
}

export default PrevNextButtons;
