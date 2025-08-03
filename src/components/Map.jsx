import { useEffect } from "react"

import { MapContainer, TileLayer, Marker , useMap } from "react-leaflet"
import L from 'leaflet'

import locationIcon from "../assets/images/icon-location.svg"


export default function Map( { lat, lng } ) { 

  const position = [ lat, lng ]
  const isMobile = window.innerWidth < 768

  const customIcon = L.icon({
    iconUrl: locationIcon,
    iconSize: isMobile ? [38,46] : [42, 52],
  })

  const MapUpdater = ( { newPosition } ) => {
    const map = useMap()

    useEffect(() => { 

      map.flyTo(newPosition, map.getZoom()) // flyTo animation to new position

    }, [newPosition , map])

    return null
  }


  return( 

    <MapContainer center={ position } zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' , zIndex: 0 }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapUpdater newPosition={position} />

      <Marker position={position} icon={customIcon} >
      </Marker>


    </MapContainer>
  )

}