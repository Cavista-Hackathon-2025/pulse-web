import { dummyHospitals } from "@/lib/dummyData"

export const bookAppointment = async (data: {
  hospitalId: string
  date: string
  time: string
  summary: string
}) => {
  return {
    success: true,
    data: {
      id: "dummy_appointment_id",
      ...data,
      hospital: dummyHospitals.find((h) => h.id === data.hospitalId),
    },
  }
}

export const joinQueue = async (hospitalId: string) => {
  return {
    success: true,
    data: {
      queueNumber: Math.floor(Math.random() * 10) + 1,
      estimatedTime: new Date(Date.now() + 1000 * 60 * 30).toISOString(),
    },
  }
}

export const bookEmergency = async (data: {
  hospitalId: string
  transportId: string
}) => {
  return {
    success: true,
    data: {
      id: "dummy_emergency_id",
      status: "confirmed",
      ...data,
    },
  }
}

export const getBookingStatus = async (bookingId: string) => {
  return {
    success: true,
    data: {
      id: bookingId,
      status: "confirmed",
      estimatedArrival: new Date(Date.now() + 1000 * 60 * 15).toISOString(),
    },
  }
}

