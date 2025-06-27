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
        prev
      </button>
      <button
        onClick={() => {
          console.log("right clicked");
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

export default LeftRightButtons;
