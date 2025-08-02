import "./App.css";
import ComplexState from "./components/ComplexState";
import EventHandling from "./components/EventHandling";
import Products from "./components/Products";
import Simplestate from "./components/Simplestate";

function App() {
  // const customers = ["john", "peter", "ade", "susan"];
  const products = [
    {
      img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/98/0913104/1.jpg?3819",
      name: "neo burner",
      price: 1000,
      id: 1,
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/4178404/1.jpg?3893",
      name: "short-sleeved",
      price: 7500,
      id: 2,
    },
    {
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/304789/1.jpg?1525",
      name: "laptop",
      price: 25000000,
      id: 3,
    },
    {
      id: 4,
      img: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/696972/1.jpg?3407",
      name: "nivea",
      price: 4000,
    },
  ];
  return (
    <div>
      <h1 className="heading">REACT LESSONS</h1>
      <EventHandling />
      <Simplestate />
      <ComplexState />
      {/* <section className="flex gap-5">
        {products.map((product, index) => {
          return <Products key={product.id} {...product} />;
        })}
      </section> */}
    </div>
  );
}

export default App;
