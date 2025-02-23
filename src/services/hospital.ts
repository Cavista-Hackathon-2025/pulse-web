import type { Hospital } from "@/types"
import { dummyHospitals } from "@/lib/dummyData"

export const getHospitals = async () => {
  return {
    success: true,
    data: dummyHospitals,
  }
}

export const selectHospital = async (hospitalId: string) => {
  const hospital = dummyHospitals.find((h) => h.id === hospitalId)
  return {
    success: true,
    data: hospital,
  }
}

export const updateHospitalProfile = async (hospitalId: string, data: Partial<Hospital>) => {
  return {
    success: true,
    data: {
      ...dummyHospitals.find((h) => h.id === hospitalId),
      ...data,
    },
  }
}

