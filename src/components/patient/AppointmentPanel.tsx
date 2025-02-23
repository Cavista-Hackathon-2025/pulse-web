"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import type { Hospital } from "../../types"

interface AppointmentPanelProps {
  selectedHospital: Hospital | null
}

export default function AppointmentPanel({ selectedHospital }: AppointmentPanelProps) {
  const [appointmentData, setAppointmentData] = useState({
    date: "",
    time: "",
    summary: "",
  })

  if (!selectedHospital) {
    return (
      <Card className="bg-secondary border-muted">
        <CardHeader>
          <CardTitle className="text-white">Schedule Appointment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">Please select a hospital from the map or search to schedule an appointment.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <Card className="bg-secondary border-muted">
        <CardHeader>
          <CardTitle className="text-white">Appointment Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-400">Date</label>
              <Input
                type="date"
                value={appointmentData.date}
                onChange={(e) =>
                  setAppointmentData((prev) => ({
                    ...prev,
                    date: e.target.value,
                  }))
                }
                className="bg-muted text-white"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Time</label>
              <Input
                type="time"
                value={appointmentData.time}
                onChange={(e) =>
                  setAppointmentData((prev) => ({
                    ...prev,
                    time: e.target.value,
                  }))
                }
                className="bg-muted text-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Appointment Summary</label>
              <Textarea
                value={appointmentData.summary}
                onChange={(e) =>
                  setAppointmentData((prev) => ({
                    ...prev,
                    summary: e.target.value,
                  }))
                }
                placeholder="Briefly describe your reason for visit"
                className="bg-muted text-white placeholder:text-gray-400"
                rows={4}
              />
            </div>

            <div className="pt-2">
              <p className="text-sm text-gray-400 mb-2">
                Consultation Fee: ${selectedHospital.averageConsultancyPrice}
              </p>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Book Appointment
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

