"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { Card } from "../ui/card"
import type { Hospital } from "../../types"
import { dummyHospitals } from "../../lib/dummy-data"

interface HospitalSearchProps {
  onSelect: (hospital: Hospital) => void
}

export default function HospitalSearch({ onSelect }: HospitalSearchProps) {
  const [query, setQuery] = useState("")
  const [hospitals, setHospitals] = useState<Hospital[]>([])
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    if (query) {
      const filtered = dummyHospitals.filter(
        (hospital) =>
          hospital.name.toLowerCase().includes(query.toLowerCase()) ||
          hospital.specialties.some((s) => s.toLowerCase().includes(query.toLowerCase())),
      )
      setHospitals(filtered)
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }
  }, [query])

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search hospitals..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 bg-secondary text-white placeholder:text-gray-400"
        />
      </div>

      {showDropdown && (
        <Card className="absolute mt-1 w-full bg-secondary border-muted z-50">
          <div className="max-h-60 overflow-auto">
            {hospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="p-3 hover:bg-muted cursor-pointer"
                onClick={() => {
                  onSelect(hospital)
                  setShowDropdown(false)
                  setQuery("")
                }}
              >
                <div className="text-white font-medium">{hospital.name}</div>
                <div className="text-sm text-gray-400">Specialties: {hospital.specialties.join(", ")}</div>
                <div className="text-sm text-gray-400">Available Beds: {hospital.availability.beds}</div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}

