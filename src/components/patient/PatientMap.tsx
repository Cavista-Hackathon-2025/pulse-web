"use client"

import { useEffect, useRef, useState } from "react"
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api"
import type { Hospital, MedTransport } from "../../types"
import { dummyHospitals, dummyMedTransports } from "../../lib/dummy-data"

declare global {
  interface Window {
    google: any
  }
}

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
}

const center = {
  lat: 40.7128,
  lng: -74.006,
}

interface PatientMapProps {
  activeTab: string
  selectedHospital: Hospital | null
  selectedTransport?: MedTransport | null
}

export default function PatientMap({ activeTab, selectedHospital, selectedTransport }: PatientMapProps) {
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null)
  const [hospitals] = useState<Hospital[]>(dummyHospitals)
  const [medTransports] = useState<MedTransport[]>(dummyMedTransports)
  const mapRef = useRef<google.maps.Map | null>(null)

  useEffect(() => {
    if (selectedHospital && selectedTransport) {
      const directionsService = new window.google.maps.DirectionsService()

      directionsService.route(
        {
          origin: selectedTransport.location.coordinates,
          destination: selectedHospital.location.coordinates,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result)
          }
        },
      )
    }
  }, [selectedHospital, selectedTransport])

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={12}
      onLoad={(map) => {
        mapRef.current = map
      }}
      options={{
        styles: [{ elementType: "geometry", stylers: [{ color: "#242f3e" }] }],
      }}
    >
      {hospitals.map((hospital) => (
        <Marker
          key={hospital.id}
          position={hospital.location.coordinates}
          icon={{
            url: "/hospital-marker.png",
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        />
      ))}

      {activeTab === "emergency" &&
        medTransports.map((transport) => (
          <Marker
            key={transport.id}
            position={transport.location.coordinates}
            icon={{
              url: `/transport-${transport.type}-marker.png`,
              scaledSize: new window.google.maps.Size(25, 25),
            }}
          />
        ))}

      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  )
}

