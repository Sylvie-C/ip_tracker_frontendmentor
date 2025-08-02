import { useState , useEffect } from "react"

import SearchBar from "./SearchBar"
import DataBoard from "./DataBoard"

export default function DataModal () { 

  const [ipAddress, setIpAddress] = useState("")
  const [data, setData] = useState(null)


  const handleSearch = (ip) => {
    setIpAddress(ip)
  }

  useEffect (() => {
    const fetchIPData = async () => {
      if (!ipAddress) return
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/ip?ip=${ipAddress}`)

        if (!response.ok) throw new Error("Network response was not ok")
        const data = await response.json()
        setData(data)

      } catch (error) {
        console.error("Error fetching IP data:", error)
        setData(null)
      }
    }

    fetchIPData()

  }, [ipAddress])


  return (
    <div className="absolute z-10 top-12 md:top-16 left-0 pt-6 bg-transparent w-full h-full flex justify-center">
      <div className="w-full px-4 flex flex-col items-center text-black gap-y-4 md:gap-y-12">
        <SearchBar onSearch={ (ip) => handleSearch(ip) } />
        <DataBoard ipData={data} />
      </div>
    </div>
  )
}