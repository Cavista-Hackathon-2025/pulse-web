"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import PatientHome from "@/components/patient/patient-home"
import HospitalHome from "@/components/hospital/hospital-home"
import MedTransportHome from "@/components/med-transport/med-transport-home"
import { UserRole } from "@/types"

export default function HomePage() {
  const [userRole, setUserRole] = useState<UserRole | null>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("userData")
    if (!userData) {
      router.push("/")
      return
    }

    const { role } = JSON.parse(userData)
    setUserRole(role)
  }, [router])

  if (!userRole) return null

  return (
    <main className="min-h-screen bg-black">
      {userRole === UserRole.PATIENT && <PatientHome />}
      {userRole === UserRole.HOSPITAL && <HospitalHome />}
      {userRole === UserRole.MED_TRANSPORT && <MedTransportHome />}
    </main>
  )
}

