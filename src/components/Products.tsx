import Buttom from "./Buttom"
import Seeker from "./Seeker"

function Products(){
    return (
        <div className="bg-gray-900 w-full h-full mt-4 rounded-md">
            <div className="flex m-3 border-b border-gray-500 p-2 justify-between">
                <div>
                    <Buttom name="Crear Producto" color="bg-blue-800" hover="hover:bg-blue-700"/>
                    <Buttom name="Actualizar Producto"/>
                    <Buttom name="Eliminar Producto" color="bg-red-700" hover="hover:bg-red-600"/>
                </div>
                <div className="flex grow-[2] mx-2">
                    <Seeker/>
                </div>
                <div className="flex">
                    <Buttom name="Facturar Compra" color="bg-green-800" hover="hover:bg-green-600"/>
                </div>
            </div>            
        </div>
    )
}

export default Products