export default function DataBoard ( { ipData } ) { 

  if (ipData && (ipData?.location.lat === 0 || !ipData?.location.lat) && (ipData?.location.lng === 0 || !ipData?.location.lng) ) {
    return (
      <div className="p-6 w-full max-w-5xl rounded-xl bg-white shadow-lg text-center">
        <p className="text-gray-500">No location data available. Try another IP address.</p>
      </div>
    )
  }

  return( 
    <div className="p-6 w-full max-w-5xl rounded-xl bg-white shadow-lg text-center md:text-left flex flex-col md:grid md:grid-cols-4 justify-between items-center md:items-start gap-y-4 md:gap-y-0">

      <div className="flex flex-col gap-y-0.5 md:gap-y-2 h-full mx-4 border-r-neutral-200 md:border-r-2">
        <label className="text-gray-400 text-xs font-bold">IP ADDRESS</label>
        <p className="text-gray-800 text-base md:text-lg font-medium">{ ipData && ipData?.ip }</p>
      </div>

      <div className="flex flex-col gap-y-0.5 md:gap-y-2 h-full mx-4 border-r-neutral-200 md:border-r-2">
        <label className="text-gray-400 text-xs font-bold">LOCATION</label>
        <p className="text-gray-800 text-base md:text-lg font-medium">{ ipData && `${ ipData?.location.city }, ${ ipData?.location.country } ${ ipData?.location.postalCode }` }</p>
      </div>

      <div className="flex flex-col gap-y-0.5 md:gap-y-2 h-full mx-4 border-r-neutral-200 md:border-r-2">
        <label className="text-gray-400 text-xs font-bold">TIME ZONE</label>
        <p className="text-gray-800 text-base md:text-lg font-medium">{ ipData && `UTC ${ ipData && ipData?.location.timezone }` }</p>
      </div>

      <div className="flex flex-col gap-y-0.5 md:gap-y-2 h-full">
        <label className="text-gray-400 text-xs font-bold">ISP</label>
        <p className="text-gray-800 text-base md:text-lg font-medium">{ ipData && ipData?.isp }</p>
      </div>

    </div>
  )
}