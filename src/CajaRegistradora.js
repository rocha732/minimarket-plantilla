import React from "react";

function CajaRegistradora() {
  return (
    <div>
      <form>
        <h1>Caja Registradora</h1>
        <input placeholder="Ingrese el codigo del producto" />
        <button className="bg-purple-400">Buscar producto</button>
        <div>
          <input placeholder="esperando producto" disabled />
          <textarea placeholder="esperando descripcion del producto" disabled />
          <input value={0} type="number" />
          <button className="bg-purple-400">Agregar a la lista</button>
        </div>
        <div>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="border border-slate-700">Producto</th>
                <th className="border border-slate-700">P.U.</th>
                <th className="border border-slate-700">Cantidad</th>
                <th className="border border-slate-700">Precio Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700"></td>
                <td className="border border-slate-700"></td>
                <td className="border border-slate-700"></td>
                <td className="border border-slate-700"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
            <h1>Sub-Total: </h1>
            <input placeholder="s/00.00" disabled/>
            <h1>IGV</h1>
            <input placeholder="s/00.00" disabled/>
            <h1>Total: </h1>
            <input placeholder="s/00.00" disabled/>

            <button className="bg-purple-500">Efectuar Pago</button>
        </div>
      </form>
    </div>
  );
}

export default CajaRegistradora;
