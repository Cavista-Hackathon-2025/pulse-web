export enum UserRole {
  HOSPITAL = "hospital",
  MED_TRANSPORT = "med_transport",
  PATIENT = "patient",
}

export enum MedTransportType {
  PRIVATE_AMBULANCE = "private_ambulance",
  HOSPITAL_AMBULANCE = "hospital_ambulance",
  PRIVATE_VEHICLE = "private_vehicle",
}

export interface Location {
  formattedAddress: string
  coordinates: {
    lat: number
    lng: number
  }
  placeId: string
}

export interface Hospital {
  id: string
  name: string
  location: Location
  availability: {
    beds: number
    doctors: number
  }
  specialties: string[]
  averageResponseTimeInMins: number
  averageConsultancyPrice: number
  appointments: string[]
  emergencies: string[]
  queue: string[]
}

export interface MedTransport {
  id: string
  type: MedTransportType
  location: Location
  hospital?: Hospital
  emergencies: string[]
}

export interface Patient {
  id: string
  firstName: string
  lastName: string
  email: string
  pastHealthSummary?: string
  knownAilments?: string[]
  location?: Location
  healthRecord?: {
    date: string
    hospital: Hospital
    medicalReport: string
    treatedFor: string[]
  }[]
}

