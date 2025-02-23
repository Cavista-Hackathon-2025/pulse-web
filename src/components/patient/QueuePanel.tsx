"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import type { Hospital } from "../../types"

interface QueuePanelProps {
  selectedHospital: Hospital | null
}

export default function QueuePanel({ selectedHospital }: QueuePanelProps) {
  const [estimatedTime, setEstimatedTime] = useState("")

  if (!selectedHospital) {
    return (
      <Card className="bg-secondary border-muted">
        <CardHeader>
          <CardTitle className="text-white">Join Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">Please select a hospital from the map or search to join their queue.</p>
        </CardContent>
      </Card>
    )
  }

  // Calculate next available time based on queue length and average response time
  const queueLength = selectedHospital.queue.length
  const avgResponseTime = selectedHospital.averageResponseTimeInMins
  const waitTime = queueLength * avgResponseTime
  const nextAvailable = new Date(Date.now() + waitTime * 60000)

  return (
    <div className="space-y-4">
      <Card className="bg-secondary border-muted">
        <CardHeader>
          <CardTitle className="text-white">Queue Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400">Current Queue Length</p>
              <p className="text-2xl font-bold text-white">{queueLength} patients</p>
            </div>
            <div>
              <p className="text-gray-400">Average Response Time</p>
              <p className="text-2xl font-bold text-white">{avgResponseTime} minutes</p>
            </div>
            <div>
              <p className="text-gray-400">Next Available Slot</p>
              <p className="text-2xl font-bold text-white">{nextAvailable.toLocaleTimeString()}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-secondary border-muted">
        <CardHeader>
          <CardTitle className="text-white">Reserve Your Spot</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400 mb-4">
            By reserving a spot, you'll be notified when it's almost your turn. This helps you avoid waiting at the
            hospital.
          </p>
          <Button className="w-full bg-primary hover:bg-primary/90">Join Queue</Button>
        </CardContent>
      </Card>
    </div>
  )
}

