function LeftRightButtons({ signs, setCurrentIndex, currentIndex }) {
  return (
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
  );
}

export default LeftRightButtons;
