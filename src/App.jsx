import "./App.css";
import CalebuseStateFetch from "./components/CalebuseStateFetch";
import Cart from "./components/cart/Cart";
import Complexform from "./components/Complexform";
import ComplexState from "./components/ComplexState";
import Conditional from "./components/Conditional";
import DataFetching from "./components/DataFetching";
import EffectBasics from "./components/EffectBasics";
import EventHandling from "./components/EventHandling";
import Products from "./components/Products";
import Simpleform from "./components/Simpleform";
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
      {/* <DataFetching /> */}
      {/* <CalebuseStateFetch /> */}
      {/* <Simpleform /> */}
      <Complexform />
    </div>
  );
}

export default App;
