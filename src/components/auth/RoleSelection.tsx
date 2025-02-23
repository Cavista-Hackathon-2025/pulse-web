"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Hospital, Truck, User } from "lucide-react"
import { UserRole } from "@/types"

const roles = [
  {
    id: UserRole.HOSPITAL,
    icon: Hospital,
    title: "Hospital",
    description: "Register your hospital to help patients",
  },
  {
    id: UserRole.MED_TRANSPORT,
    icon: Truck,
    title: "Medical Transport",
    description: "Provide transportation services",
  },
  {
    id: UserRole.PATIENT,
    icon: User,
    title: "Patient",
    description: "Access medical services",
  },
]

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)
  const router = useRouter()

  const handleSelect = (role: UserRole) => {
    setSelectedRole(role)
    localStorage.setItem("userRole", role)
    router.push(`/register?role=${role}`)
  }

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {roles.map((role) => (
        <Card
          key={role.id}
          className={`p-6 cursor-pointer transition-all hover:scale-105 bg-secondary border-muted
            ${selectedRole === role.id ? "ring-2 ring-primary" : ""}`}
          onClick={() => handleSelect(role.id)}
        >
          <role.icon className="w-12 h-12 mb-4 text-gray-300" />
          <h3 className="text-lg font-semibold mb-2 text-white">{role.title}</h3>
          <p className="text-sm text-gray-400">{role.description}</p>
        </Card>
      ))}
    </div>
  )
}

