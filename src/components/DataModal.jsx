import SearchBar from "./SearchBar"
import DataBoard from "./DataBoard"

export default function DataModal () { 

  return (
    <div className="absolute z-10 top-12 md:top-16 left-0 pt-6 bg-transparent w-full h-full flex justify-center">
      <div className="w-full px-4 flex flex-col items-center text-black gap-y-4 md:gap-y-12">
        <SearchBar />
        <DataBoard />
      </div>
    </div>
  )
}