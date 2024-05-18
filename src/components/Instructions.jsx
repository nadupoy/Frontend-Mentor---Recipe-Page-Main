const Instructions = () => {
  return (
    <section className="w-[304px] m-auto mb-6 border-b-2 border-b-light-grey xl:w-full">
      <h2 className="text-nutmeg font-serif text-3xl mb-4">Instructions</h2>
      <ol className="list-decimal ml-6 text-nutmeg font-bold w-72 xl:w-[95%]">
        <li className="mb-2">
          <p className="pl-4 text-wenge-brown font-normal">
            <b>Beat the eggs: </b>In a bowl, beat the eggs with a pinch of salt
            and pepper until they are well mixed. You can add a tablespoon of
            water or milk for a fluffier texture.
          </p>
        </li>
        <li className="mb-2">
          <p className="pl-4 text-wenge-brown font-normal">
            <b>Heat the pan: </b>Place a non-stick frying pan over medium heat
            and add butter or oil.
          </p>
        </li>
        <li className="mb-2">
          <p className="pl-4 text-wenge-brown font-normal">
            <b>Cook the omelette: </b>Once the butter is melted and bubbling,
            pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
            surface.
          </p>
        </li>
        <li className="mb-2">
          <p className="pl-4 text-wenge-brown font-normal">
            <b>Add fillings (optional): </b>When the eggs begin to set at the
            edges but are still slightly runny in the middle, sprinkle your
            chosen fillings over one half of the omelette.
          </p>
        </li>
        <li className="mb-2">
          <p className="pl-4 text-wenge-brown font-normal">
            <b>Fold and serve: </b>As the omelette continues to cook, carefully
            lift one edge and fold it over the fillings. Let it cook for another
            minute, then slide it onto a plate.
          </p>
        </li>
        <li className="pb-6">
          <p className="pl-4 text-wenge-brown font-normal">
            <b>Enjoy: </b>Serve hot, with additional salt and pepper if needed.
          </p>
        </li>
      </ol>
    </section>
  );
};

export default Instructions;
