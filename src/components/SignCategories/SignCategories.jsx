import "./SignCategories.css";

function SignCategories({ signs, currentIndex }) {
  return (
    <section id="sign_category">
      <p>{signs[currentIndex].primary_category}</p>
      <p>{signs[currentIndex].secondary_category}</p>
    </section>
  );
}

export default SignCategories;
