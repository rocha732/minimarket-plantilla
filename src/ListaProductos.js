import { BsFillTrashFill } from "react-icons/bs";

function ListaProductos({ products, deleteProduct }) {
  return (
    <div>
      <table className="table-auto">
        <thead className="text-center">
          <tr>
            
          <th className="border border-slate-600">Codigo</th>
            <th className="border border-slate-600">Producto</th>
            <th className="border border-slate-600">Descripcion</th>
            <th className="border border-slate-600">Precio</th>
            <th className="border border-slate-600">Accion</th>
          </tr>
        </thead>
        <tbody className=" ">
          {products.map((products) => (
            <tr key={products.id}>
              <td className="border border-slate-700">{products.id}</td>
              <td className="border border-slate-700">{products.title}</td>
              <td className="border border-slate-700">
                {products.description}
              </td>
              <td className="border border-slate-700">{products.price}</td>
              <td className="border border-slate-700">
                <button className="rounded-lg bg-red-400"  onClick={() => deleteProduct(products.id) }>
                  Eliminar tarea <BsFillTrashFill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductos;
