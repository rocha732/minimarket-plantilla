import AgregarProductos from "./AgregarProductos";
import ListaProductos from "./ListaProductos";
import { products as data } from "./data/products";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, []);

  function createProduct(title, description, price) {
    setProducts([
      ...products,
      {
        title,
        description,
        price,
      },
    ]);
  }
  return (
    <div className="md:flex sm:flex-col">
      <AgregarProductos createProduct={createProduct}/>
      <ListaProductos products={products}/>
    </div>
  );
}

export default App;
