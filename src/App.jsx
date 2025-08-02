import { useState } from 'react'

import Header from './components/Header'
import Map from './components/Map'
import DataModal from './components/DataModal'


export default function App() { 

  const [ipData, setIpData] = useState(null)

  const handleData = (data) => {
    setIpData(data)
  }

  return (
    <>
      <Header />
      <main>
        {/* <Map lat={51.505} lng={-0.09}  /> */}
        { ipData && <Map lat={ ipData.location.lat } lng={ ipData.location.lng } /> }
        
        <DataModal onIpChange={ (data) => handleData(data) } />
      </main>
    </>
  )
}
