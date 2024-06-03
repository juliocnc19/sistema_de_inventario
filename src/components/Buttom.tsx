function Buttom({name,color="bg-gray-950",hover="hover:bg-gray-800"}:{name:string,color?:string,hover?:string}){
    return(
        <button className={`${color} text-white text-sm p-2 rounded-md border ${hover} cursor-pointer mx-1`}>
            {name}
        </button>
    )
}

export default Buttom