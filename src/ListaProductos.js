
function ListaProductos({products}) {
  return (
    <div className="flex-1 overflow-auto h-80  sm:w-auto md:w-1/2 bg-red-500 shadow-lg rounded-lg">
      <table className="table-auto border-collapse border border-slate-500  rounded-lg ">
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
              <td className="border border-slate-700">
                {products.description}
              </td>
              <td className="border border-slate-700">{products.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaProductos;
