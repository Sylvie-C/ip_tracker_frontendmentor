import arrow from "../assets/images/icon-arrow.svg"

export default function SearchBar() {
  return (
    <div className="w-full flex justify-center items-center">
      <input
        type="text"
        placeholder="Search for an IP address..."
        className="p-4 w-full sm:w-3/4 sm:max-w-96 h-12 md:h-14 text-sm md:text-base text-gray-700 rounded-tl-xl rounded-bl-xl border-none focus:outline-none"
      />
      <button className="h-12 md:h-14 py-4 px-5 rounded-tr-xl rounded-br-xl bg-black hover:cursor-pointer hover:bg-neutral-700">
        <img src={ arrow } alt="arrow button to run Search" width="11px" height="11px" />
      </button>
    </div>
  )
}