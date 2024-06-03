function Seeker() {
  return (
    <div className="flex w-full justify-center items-center">
      <form className="w-full">
        <input
          className="p-2 outline-none rounded-md bg-gray-600 text-white w-full"
          type="text"
          placeholder="Buscar producto"
        />
      </form>
      <button className="bg-sky-800 p-2 rounded-md mx-1 hover:bg-sky-700 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-white"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default Seeker;
