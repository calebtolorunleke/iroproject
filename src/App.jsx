import "./App.css";
import Cart from "./components/cart/Cart";
import ComplexState from "./components/ComplexState";
import Conditional from "./components/Conditional";
import DataFetching from "./components/DataFetching";
import EffectBasics from "./components/EffectBasics";
import EventHandling from "./components/EventHandling";
import Products from "./components/Products";
import Simplestate from "./components/Simplestate";

function App() {
  // const customers = ["john", "peter", "ade", "susan"];

  return (
    <div>
      {/* <h1 className="heading">REACT LESSONS</h1>
      <EventHandling />
      <Simplestate />
      <ComplexState />
      <Conditional /> */}
      {/* <section className="flex gap-5">
        {products.map((product, index) => {
          return <Products key={product.id} {...product} />;
        })}
      </section> */}
      {/* <Cart /> */}
      {/* <EffectBasics /> */}
      <DataFetching />
    </div>
  );
}

export default App;
