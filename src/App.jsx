import { useState , useEffect } from 'react'

import Header from './components/Header'
import Map from './components/Map'
import DataModal from './components/DataModal'


export default function App() { 

  const [ ipData, setIpData ] = useState(null)

  const [ positionLat , setPositionLat ] = useState(0)
  const [ positionLng , setPositionLng ] = useState(0)

  const handleData = (data) => {
    setIpData(data)
  }

  useEffect(() => {
    if (ipData) {
      setPositionLat(ipData.location.lat)
      setPositionLng(ipData.location.lng)
    }
  }, [ipData] )

  return (
    <>
      <Header />
      <main>
        { ipData && <Map lat={ positionLat } lng={ positionLng } /> }
        
        <DataModal onIpChange={ (data) => handleData(data) } />
      </main>
    </>
  )
}
