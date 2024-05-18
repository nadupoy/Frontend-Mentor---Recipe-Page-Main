const Preparation = () => {
  return (
    <section className="bg-rose-white pt-6 pb-6 mt-6 mb-6 rounded-lg w-[304px] xl:w-full">
      <h3 className="text-dark-raspberry font-sans text-xl font-bold mb-2 pl-6">
        Preparation time
      </h3>
      <ul className="list-disc pl-12 text-dark-raspberry">
        <li className="mb-2">
          <p className="pl-4 w-60 text-wenge-brown xl:w-full">
            <b>Total: </b>Approximately 10 minutes
          </p>
        </li>
        <li className="mb-2">
          <p className="pl-4 w-60 text-wenge-brown xl:w-full">
            <b>Preparation: </b>5 minutes
          </p>
        </li>
        <li>
          <p className="pl-4 w-60 text-wenge-brown xl:w-full">
            <b>Cooking: </b>5 minutes
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Preparation;
