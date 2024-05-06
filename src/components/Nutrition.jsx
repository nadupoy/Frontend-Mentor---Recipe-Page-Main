const Nutrition = () => {
  return (
    <section className="w-[304px] m-auto mb-6">
      <h2 className="text-nutmeg font-serif text-3xl mb-4">Nutrition</h2>
      <p className="text-wenge-brown mb-4">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="table-fixed w-full">
        <tbody>
          <tr className="border-b-2 border-b-light-grey">
            <td className="text-wenge-brown w-1/2 pl-8 pb-3">Calories</td>
            <td className="w-1/2 pl-4 pb-3">
              <b className="text-nutmeg">277kcal</b>
            </td>
          </tr>
          <tr className="border-b-2 border-b-light-grey">
            <td className="text-wenge-brown w-1/2 pl-8 pb-3 pt-3">Carbs</td>
            <td className="w-1/2 pl-4 pb-3 pt-3">
              <b className="text-nutmeg">0g</b>
            </td>
          </tr>
          <tr className="border-b-2 border-b-light-grey">
            <td className="text-wenge-brown w-1/2 pl-8 pb-3 pt-3">Protein</td>
            <td className="w-1/2 pl-4 pb-3 pt-3">
              <b className="text-nutmeg">20g</b>
            </td>
          </tr>
          <tr>
            <td className="text-wenge-brown w-1/2 pl-8 pt-3 pb-3">Fat</td>
            <td className="w-1/2 pl-4 pb-3 pt-3">
              <b className="text-nutmeg">22g</b>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Nutrition;
