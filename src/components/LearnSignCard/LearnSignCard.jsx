function LearnSignCard({ signMetadata, currentIndex }) {
  return (
    <section id="sign_card_container">
      <img
        src={`./src/assets/sign_images/${signMetadata.identifier}.png`}
        alt={signMetadata.description}
      />

      <section id="sign_description_container">
        <p>{currentIndex + 1}</p>
        <p>{signMetadata.description}</p>
      </section>
    </section>
  );
}

export default LearnSignCard;
