"use client"

import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api"

const mapContainerStyle = {
  width: "100%",
  height: "400px",
}

const center = {
  lat: 40.7128,
  lng: -74.006,
}

// Declare google variable
declare global {
  interface Window {
    google: any
  }
}

export default function MedTransportHome() {
  const [selectedEmergency, setSelectedEmergency] = useState(null)
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null)

  // Dummy emergency data
  const emergencies = [
    {
      id: 1,
      patientName: "John Doe",
      location: { lat: 40.7282, lng: -73.9942 },
      destination: { lat: 40.7589, lng: -73.9851 },
      status: "Pending",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      location: { lat: 40.7549, lng: -73.984 },
      destination: { lat: 40.7829, lng: -73.9654 },
      status: "Pending",
    },
  ]

  const handleEmergencySelect = (emergency: any) => {
    setSelectedEmergency(emergency)

    const directionsService = new window.google.maps.DirectionsService()

    directionsService.route(
      {
        origin: emergency.location,
        destination: emergency.destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result)
        }
      },
    )
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <Card className="bg-secondary border-muted">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Emergency Requests</h2>
            <div className="space-y-4">
              {emergencies.map((emergency) => (
                <Card
                  key={emergency.id}
                  className={`bg-muted p-4 cursor-pointer transition-all
                    ${selectedEmergency?.id === emergency.id ? "ring-2 ring-primary" : ""}`}
                  onClick={() => handleEmergencySelect(emergency)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-medium">Patient: {emergency.patientName}</h3>
                      <p className="text-gray-400">Status: {emergency.status}</p>
                    </div>
                    <Button variant="outline">Accept</Button>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-secondary border-muted">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Route Map</h2>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
              options={{
                styles: [{ elementType: "geometry", stylers: [{ color: "#242f3e" }] }],
              }}
            >
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

