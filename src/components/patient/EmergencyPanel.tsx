import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import type { Hospital, MedTransport } from "../../types"
import { dummyMedTransports } from "../../lib/dummy-data"

interface EmergencyPanelProps {
  selectedHospital: Hospital | null
}

export default function EmergencyPanel({ selectedHospital }: EmergencyPanelProps) {
  const [selectedTransport, setSelectedTransport] = useState<MedTransport | null>(null)

  if (!selectedHospital) {
    return (
      <Card className="bg-secondary border-muted">
        <CardHeader>
          <CardTitle className="text-white">Emergency Assistance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">
            Please select a hospital from the map or search to proceed with emergency assistance.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <Card className="bg-secondary border-muted">
        <CardHeader>
          <CardTitle className="text-white">Selected Hospital</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-white">{selectedHospital.name}</h3>
            <p className="text-gray-400">Response Time: {selectedHospital.averageResponseTimeInMins} mins</p>
            <p className="text-gray-400">Available Beds: {selectedHospital.availability.beds}</p>
            <p className="text-gray-400">Available Doctors: {selectedHospital.availability.doctors}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-secondary border-muted">
        <CardHeader>
          <CardTitle className="text-white">Select Transport</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {dummyMedTransports.map((transport) => (
              <div
                key={transport.id}
                className={`p-3 rounded-lg cursor-pointer border transition-all
                  ${
                    selectedTransport?.id === transport.id
                      ? "border-primary bg-primary/10"
                      : "border-muted hover:border-primary/50"
                  }`}
                onClick={() => setSelectedTransport(transport)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white capitalize">{transport.type.replace("_", " ")}</p>
                    <p className="text-sm text-gray-400">Est. arrival: 5-10 mins</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white">$50</p>
                    <p className="text-sm text-gray-400">Base fare</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full mt-4 bg-primary hover:bg-primary/90" disabled={!selectedTransport}>
            Confirm Emergency Transport
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

