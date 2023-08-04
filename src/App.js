import AgregarProductos from "./AgregarProductos";
import ListaProductos from "./ListaProductos";
import PanelInicial from "./PanelInicial";
import { products as data } from "./data/products";
import { useState, useEffect } from "react";
import CajaRegistradora from "./CajaRegistradora";
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
        id: products.length + 1,
      },
    ]);
  }
  function deleteProduct(productsID){
    setProducts(products.filter((products) => products.id !== productsID))
  }

  return (
    <div>
      <PanelInicial />
      <CajaRegistradora />
      <AgregarProductos createProduct={createProduct} />
      <ListaProductos products={products} deleteProduct={deleteProduct}/>
    </div>
  );
}

export default App;
