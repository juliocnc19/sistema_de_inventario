import Summary from "./components/summary"
import Products from "./components/Products";

function App() {
  return (
    <div className="flex h-screen w-screen flex-col p-4">
      <Summary/>
      <Products/>
    </div>
  );
}

export default App;
