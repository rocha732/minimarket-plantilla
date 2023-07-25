import { useState } from "react";
function AgregarProductos({ createProduct }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(title, description, price);
    setTitle("");
    setPrice(0);
    setDescription("");
  };

  return (
    <div className="flex-1 overflow-auto h-80  md:w-auto sm:w-1/2 bg-yellow-500 shadow-lg rounded-lg justify-items-center ">
      <h1>Agregar producto</h1>
      <form onSubmit={handleSubmit}>
        <input
        value={title}
          placeholder="Escriba el nombre del producto"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
        value={description}
          placeholder="Escriba la descipcion del producto"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
        value={price} type="number"
          placeholder="Escriba el precio del producto"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="rounded-full bg-green-400" >Guardar Producto</button>
      </form>
    </div>
  );
}

export default AgregarProductos;
