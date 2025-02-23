"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"
import { ClipLoader } from "react-spinners"
import { UserRole } from "@/types"

export default function RegistrationForm({ role }: { role: UserRole }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    ...(role === UserRole.PATIENT && {
      pastHealthSummary: "",
      knownAilments: "",
    }),
    ...(role === UserRole.HOSPITAL && {
      hospitalName: "",
      specialties: "",
      beds: "",
      doctors: "",
    }),
    ...(role === UserRole.MED_TRANSPORT && {
      transportType: "private_ambulance",
    }),
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Store user data
    localStorage.setItem(
      "userData",
      JSON.stringify({
        ...formData,
        email: localStorage.getItem("userEmail"),
        role,
      }),
    )

    router.push("/home")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="bg-secondary border-muted">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-muted text-white placeholder:text-gray-400"
              required
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-muted text-white placeholder:text-gray-400"
              required
            />
          </div>

          {role === UserRole.PATIENT && (
            <>
              <Textarea
                name="pastHealthSummary"
                placeholder="Past Health Summary"
                value={formData.pastHealthSummary}
                onChange={handleChange}
                className="bg-muted text-white placeholder:text-gray-400"
                required
              />
              <Input
                name="knownAilments"
                placeholder="Known Ailments (comma separated)"
                value={formData.knownAilments}
                onChange={handleChange}
                className="bg-muted text-white placeholder:text-gray-400"
                required
              />
            </>
          )}

          {role === UserRole.HOSPITAL && (
            <>
              <Input
                name="hospitalName"
                placeholder="Hospital Name"
                value={formData.hospitalName}
                onChange={handleChange}
                className="bg-muted text-white placeholder:text-gray-400"
                required
              />
              <Input
                name="specialties"
                placeholder="Specialties (comma separated)"
                value={formData.specialties}
                onChange={handleChange}
                className="bg-muted text-white placeholder:text-gray-400"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="beds"
                  type="number"
                  placeholder="Available Beds"
                  value={formData.beds}
                  onChange={handleChange}
                  className="bg-muted text-white placeholder:text-gray-400"
                  required
                />
                <Input
                  name="doctors"
                  type="number"
                  placeholder="Available Doctors"
                  value={formData.doctors}
                  onChange={handleChange}
                  className="bg-muted text-white placeholder:text-gray-400"
                  required
                />
              </div>
            </>
          )}

          {role === UserRole.MED_TRANSPORT && (
            <select
              name="transportType"
              value={formData.transportType}
              onChange={handleChange}
              className="w-full bg-muted text-white p-2 rounded-md"
              required
            >
              <option value="private_ambulance">Private Ambulance</option>
              <option value="hospital_ambulance">Hospital Ambulance</option>
              <option value="private_vehicle">Private Vehicle</option>
            </select>
          )}

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
            {loading ? (
              <ClipLoader size={20} color="#ffffff" />
            ) : (
              <>
                <Heart className="mr-2 h-4 w-4" />
                Get Started
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

