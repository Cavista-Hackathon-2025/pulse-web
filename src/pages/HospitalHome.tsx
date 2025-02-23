"use client"

import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import type { Hospital } from "../types"

export default function HospitalHome() {
  const [hospitalData, setHospitalData] = useState<Partial<Hospital>>({
    name: "City General Hospital",
    availability: {
      beds: 50,
      doctors: 20,
    },
    specialties: ["Cardiology", "Neurology"],
    averageResponseTimeInMins: 15,
    averageConsultancyPrice: 100,
  })

  const [activeTab, setActiveTab] = useState("emergencies")

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <Card className="bg-secondary border-muted">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Hospital Profile</h2>
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Hospital Name"
                value={hospitalData.name}
                onChange={(e) =>
                  setHospitalData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                className="bg-muted text-white"
              />
              <Input
                type="number"
                placeholder="Available Beds"
                value={hospitalData.availability?.beds}
                onChange={(e) =>
                  setHospitalData((prev) => ({
                    ...prev,
                    availability: {
                      ...prev.availability!,
                      beds: Number.parseInt(e.target.value),
                    },
                  }))
                }
                className="bg-muted text-white"
              />
              <Input
                type="number"
                placeholder="Available Doctors"
                value={hospitalData.availability?.doctors}
                onChange={(e) =>
                  setHospitalData((prev) => ({
                    ...prev,
                    availability: {
                      ...prev.availability!,
                      doctors: Number.parseInt(e.target.value),
                    },
                  }))
                }
                className="bg-muted text-white"
              />
              <Input
                type="number"
                placeholder="Average Response Time (mins)"
                value={hospitalData.averageResponseTimeInMins}
                onChange={(e) =>
                  setHospitalData((prev) => ({
                    ...prev,
                    averageResponseTimeInMins: Number.parseInt(e.target.value),
                  }))
                }
                className="bg-muted text-white"
              />
              <Input
                type="number"
                placeholder="Consultancy Price ($)"
                value={hospitalData.averageConsultancyPrice}
                onChange={(e) =>
                  setHospitalData((prev) => ({
                    ...prev,
                    averageConsultancyPrice: Number.parseInt(e.target.value),
                  }))
                }
                className="bg-muted text-white"
              />
            </div>
            <Button className="mt-4 bg-primary hover:bg-primary/90">Update Profile</Button>
          </CardContent>
        </Card>

        <Card className="bg-secondary border-muted">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-muted">
                <TabsTrigger value="emergencies" className="text-white">
                  Emergencies
                </TabsTrigger>
                <TabsTrigger value="queue" className="text-white">
                  Queue
                </TabsTrigger>
                <TabsTrigger value="appointments" className="text-white">
                  Appointments
                </TabsTrigger>
              </TabsList>

              <TabsContent value="emergencies">
                <div className="space-y-4 mt-4">
                  {/* Dummy emergency data */}
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-muted p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-medium">Emergency Case #{i}</h3>
                          <p className="text-gray-400">Patient: John Doe</p>
                          <p className="text-gray-400">Condition: Critical</p>
                        </div>
                        <Button variant="outline">Accept</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="queue">
                <div className="space-y-4 mt-4">
                  {/* Dummy queue data */}
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-muted p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-white font-medium">Queue #{i}</h3>
                          <p className="text-gray-400">Expected: 2:30 PM</p>
                        </div>
                        <Button variant="outline">Call Next</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="appointments">
                <div className="space-y-4 mt-4">
                  {/* Dummy appointment data */}
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-muted p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-medium">Appointment #{i}</h3>
                          <p className="text-gray-400">Time: 3:00 PM</p>
                          <p className="text-gray-400">Patient: Jane Smith</p>
                        </div>
                        <Button variant="outline">View Details</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

