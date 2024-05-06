const Ingredients = () => {
  return (
    <section className="w-[304px] m-auto mb-6 border-b-2 border-b-light-grey">
      <h2 className="text-nutmeg font-serif text-3xl mb-4">Ingredients</h2>
      <ul className="list-disc pl-4 text-nutmeg ml-2">
        <li className="mb-2">
          <p className="pl-4 text-wenge-brown">2-3 large eggs</p>
        </li>
        <li className="mb-2">
          <p className="pl-4 text-wenge-brown">Salt, to taste</p>
        </li>
        <li className="mb-2">
          <p className="pl-4 text-wenge-brown">Pepper, to taste</p>
        </li>
        <li className="mb-2">
          <p className="pl-4 text-wenge-brown">1 tablespoon of butter or oil</p>
        </li>
        <li className="pb-6">
          <p className="pl-4 text-wenge-brown">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Ingredients;
