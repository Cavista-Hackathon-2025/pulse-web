import { dummyMedTransports } from "@/lib/dummyData"

export const getRides = async () => {
  return {
    success: true,
    data: dummyMedTransports,
  }
}

export const selectRide = async (transportId: string) => {
  const transport = dummyMedTransports.find((t) => t.id === transportId)
  return {
    success: true,
    data: transport,
  }
}

export const updateTransportLocation = async (transportId: string, location: { lat: number; lng: number }) => {
  return {
    success: true,
    data: {
      ...dummyMedTransports.find((t) => t.id === transportId),
      location: {
        ...location,
        formattedAddress: "Updated Location",
      },
    },
  }
}

