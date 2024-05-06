const Preparation = () => {
  return (
    <section className="bg-rose-white pt-6 pb-6 mt-6 mb-6 rounded-lg w-[312px]">
      <h3 className="text-dark-raspberry font-sans text-xl font-bold mb-2 ml-8">
        Preparation time
      </h3>
      <ul className="list-disc list-inside w-60 text-wenge-brown ml-8 grid">
        <li className="mb-2">
          <p className="inline">
            <b className="pl-6">Total: </b>Approximately 10 minutes
          </p>
        </li>
        <li className="mb-2">
          <p className="inline">
            <b className="pl-6">Preparation: </b>5 minutes
          </p>
        </li>
        <li>
          <p className="inline">
            <b className="pl-6">Cooking: </b>5 minutes
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Preparation;
