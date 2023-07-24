import { products as data } from "./data/products";
import { useState, useEffect } from "react";

function ListaProductos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <div className="sm:container rounded-lg ">
      <table className="table-auto border-collapse border border-slate-500 ">
        <thead className="text-center">
          <tr>
            <th className="border border-slate-600">Producto</th>
            <th className="border border-slate-600">Descripcion</th>
            <th className="border border-slate-600">Precio</th>
          </tr>
        </thead>
        <tbody className=" ">
          {products.map((products) => (
            <tr key={products.id}>
              <td className="border border-slate-700">{products.title}</td>
              <td className="border border-slate-700">{products.description}</td>
              <td className="border border-slate-700">{products.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductos;
