export default function DataBoard () {

  return(
    <div className="p-6 w-full max-w-5xl h-fit min-h-40 rounded-xl bg-white shadow-lg text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-start gap-y-4 md:gap-y-0">

      <div className="flex flex-col gap-y-2">
        <label className="text-gray-500 text-sm">IP ADDRESS</label>
        <p className="text-black text-lg font-semibold">192.168.1.1</p>
      </div>

      <div className="flex flex-col gap-y-2">
        <label className="text-gray-500 text-sm">LOCATION</label>
        <p className="text-black text-lg font-semibold">Brooklyn, New York</p>
      </div>

      <div className="flex flex-col gap-y-2">
        <label className="text-gray-500 text-sm">TIME ZONE</label>
        <p className="text-black text-lg font-semibold">UTC-5:00</p>
      </div>

      <div className="flex flex-col gap-y-2">
        <label className="text-gray-500 text-sm">ISP</label>
        <p className="text-black text-lg font-semibold">Space X , Starlink</p>
      </div>

    </div>
  )
}