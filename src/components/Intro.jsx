import { heroImage } from "../assets/images";
import Preparation from "./Preparation";

const Intro = () => {
  return (
    <>
      <img src={heroImage} alt="hero-image" />
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>

      <Preparation />
    </>
  );
};

export default Intro;
