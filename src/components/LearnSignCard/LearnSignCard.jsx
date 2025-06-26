function LearnSignCard({ signMetadata }) {
  return (
    <section id="sign_card_container">
      <img
        src={`./src/assets/sign_images/${signMetadata.identifier}.png`}
        alt={signMetadata.description}
      />

      <p>{signMetadata.description}</p>
    </section>
  );
}

export default LearnSignCard;
