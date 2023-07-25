import { useState } from "react";
function AgregarProductos({ createProduct }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(title, description, price);
  };

  return (
    <div className="flex-1">
      <h1>Agregar producto</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escriba el nombre del producto"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Escriba la descipcion del producto"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Escriba el precio del producto"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="rounded-full bg-green-400" >Guardar Producto</button>
      </form>
    </div>
  );
}

export default AgregarProductos;
