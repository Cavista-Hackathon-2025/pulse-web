"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PatientMap from "./patient-map"
import EmergencyPanel from "./emergency-panel"
import QueuePanel from "./queue-panel"
import AppointmentPanel from "./appointment-panel"
import HospitalSearch from "./hospital-search"

export default function PatientHome() {
  const [activeTab, setActiveTab] = useState("emergency")
  const [selectedHospital, setSelectedHospital] = useState(null)

  return (
    <div className="flex h-screen">
      {/* Left Section - Map */}
      <div className="flex-1 relative">
        <div className="absolute top-4 left-4 right-4 z-10">
          <HospitalSearch onSelect={setSelectedHospital} />
        </div>
        <div className="absolute top-20 left-4 z-10">
          <Card className="bg-secondary/80 backdrop-blur border-muted p-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-muted">
                <TabsTrigger value="emergency" className="text-white">
                  Emergency
                </TabsTrigger>
                <TabsTrigger value="queue" className="text-white">
                  Join Queue
                </TabsTrigger>
                <TabsTrigger value="appointment" className="text-white">
                  Schedule
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </Card>
        </div>
        <PatientMap activeTab={activeTab} selectedHospital={selectedHospital} />
      </div>

      {/* Right Section - Content */}
      <div className="w-1/3 bg-secondary border-l border-muted p-4 overflow-y-auto">
        <TabsContent value="emergency" className="mt-0">
          <EmergencyPanel selectedHospital={selectedHospital} />
        </TabsContent>
        <TabsContent value="queue" className="mt-0">
          <QueuePanel selectedHospital={selectedHospital} />
        </TabsContent>
        <TabsContent value="appointment" className="mt-0">
          <AppointmentPanel selectedHospital={selectedHospital} />
        </TabsContent>
      </div>
    </div>
  )
}

