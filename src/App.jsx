import Intro from "./components/Intro";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import Footer from "./components/Footer";

const App = () => {
  return (
    <section className="xl:m-auto">
      <main>
        <Intro />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </main>
      <Footer />
    </section>
  );
};

export default App;
