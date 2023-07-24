import { products as data } from "./data/products";
import { useState, useEffect } from "react";

function ListaProductos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <div className="shadow-sm  bg-white md:container md:mx-auto">
      <table className="md:table-auto border-4 ">
        <thead className="border-2 bg-slate-400 text-center rounded-md">
          <tr>
            <td>Producto</td>
            <td>Descripcion</td>
            <td>Precio</td>
          </tr>
        </thead>
        <tbody className="border-2">
          {products.map((products) => (
            <tr key={products.id}>
              <td>{products.title}</td>
              <td>{products.description}</td>
              <td>{products.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductos;
