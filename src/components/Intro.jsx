import { heroImage } from "../assets/images";
import Preparation from "./Preparation";

const Intro = () => {
  return (
    <>
      <img
        src={heroImage}
        alt="hero-image"
        className="object-cover xl:rounded-2xl"
      />
      <section className="w-[312px] m-auto xl:w-full">
        <h1 className="text-dark-charcoal font-serif text-4xl mt-4 mb-4">
          Simple Omelette Recipe
        </h1>
        <p className="text-wenge-brown text-base">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <Preparation />
      </section>
    </>
  );
};

export default Intro;
