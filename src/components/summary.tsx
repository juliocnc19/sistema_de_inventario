function Summary() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="flex flex-col bg-gray-900 rounded-md p-4 justify-center items-center">
        <h1 className="text-white font-semibold text-2xl">
          Numero de productos
        </h1>
        <span className="text-white text-3xl text-center mt-2">0</span>
        <span className="text-gray-400 text-center mt-2">Productos</span>
      </div>
      <div className="flex flex-col bg-gray-900 rounded-md p-4 justify-center items-center">
        <h1 className="text-white font-semibold text-2xl ">
          Total de ventas hoy
        </h1>
        <span className="text-white text-3xl text-center mt-2">$ 0</span>
        <span className="text-gray-400 text-center mt-2">Dolares</span>
      </div>
      <div className="flex flex-col bg-gray-900 rounded-md p-3 justify-center items-center">
        <h1 className="text-white font-semibold text-xl">
          Productos mas vendidos
        </h1>
        <div className="bg-gray-700 m-4 rounded-md p-2 mx-4 w-full">
          <ul className="text-white">
            <li className="border-b border-gray-400 w-full mb-2">Producto A</li>
            <li className="border-b border-gray-400 w-full mb-2">Prodcuto B</li>
            <li className="border-b border-gray-400 w-full mb-2">Producto C</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Summary;
