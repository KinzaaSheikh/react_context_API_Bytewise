import Item from "./components/Item"
import Cart from "./components/Cart"

const App = () => {
  return (
    <div>
      <Item name="Macbook Pro" price={500000} />
      <Item name="Pendrive" price={40000} />
      <Item name="Mobile" price={90000} />
      <Cart />
    </div>
  );
}

export default App;
