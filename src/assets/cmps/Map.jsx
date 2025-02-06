import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'


function Marker() {
  return (
    <div className="branch-img">
     📌
    </div>
  )
}

const API_KEY = ''

export function Map() {
  const [coordinates, setCoordinates] = useState({ lat: 32.0853, lng: 34.7818 })
  const [zoom, setZoom] = useState(8)

  function handleClick({ lat, lng }) {
    setCoordinates({ lat, lng })
  }

  const branches = [
    {
      city: 'Ness-Ziona',
      id: 101,
      position: {
        lat: 31.923585,
        lng: 34.811080,
      },
    },
    {
      city: 'Ramat-Gan',
      id: 102,
      position: {
        lat: 32.067148,
        lng: 34.808713,
      },
    },
    {
      city: 'Jerusalem',
      id: 103,
      position: {
        lat: 31.779281,
        lng: 35.190375,
      },
    },
  ]

  return (
    <div className='map'>
      <h2>Our locations</h2>
      <div className='flex flex-column'>
      {branches.map(branch => {
        return (
          <button className='btn'
            key={branch.id}
            onClick={() => {
              setCoordinates(branch.position)
              setZoom(12)
            }}
          >
            {branch.city}
          </button>
        )
      })}
      </div>
      {/* // Important! Always set the container height explicitly */}
      <div className="map" style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          center={coordinates}
          zoom={zoom}
          onClick={handleClick}
        >
          {branches.map(branch => {
            return (
              <Marker
                lat={branch.position.lat}
                lng={branch.position.lng}
                key={branch.id}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    </div>
  )
}
