import { type Hospital, type MedTransport, type Patient, MedTransportType, type Location } from "@/types"

const dummyLocation: Location = {
  formattedAddress: "123 Healthcare St, Medical City, MC 12345",
  coordinates: {
    lat: 40.7128,
    lng: -74.006,
  },
  placeId: "ChIJOwg_06VPwokRYv534QaPC8g",
}

export const dummyHospitals: Hospital[] = [
  {
    id: "1",
    name: "City General Hospital",
    location: {
      ...dummyLocation,
      formattedAddress: "456 Hospital Ave, Medical City, MC 12345",
    },
    availability: {
      beds: 50,
      doctors: 20,
    },
    specialties: ["Cardiology", "Neurology", "Orthopedics"],
    averageResponseTimeInMins: 15,
    averageConsultancyPrice: 100,
    appointments: [],
    emergencies: [],
    queue: [],
  },
  {
    id: "2",
    name: "Community Medical Center",
    location: {
      ...dummyLocation,
      formattedAddress: "789 Health Blvd, Medical City, MC 12345",
    },
    availability: {
      beds: 30,
      doctors: 15,
    },
    specialties: ["Pediatrics", "Internal Medicine", "Orthopedics"],
    averageResponseTimeInMins: 20,
    averageConsultancyPrice: 80,
    appointments: [],
    emergencies: [],
    queue: [],
  },
]

export const dummyMedTransports: MedTransport[] = [
  {
    id: "1",
    type: MedTransportType.PRIVATE_AMBULANCE,
    location: dummyLocation,
    hospital: dummyHospitals[0],
    emergencies: [],
  },
  {
    id: "2",
    type: MedTransportType.HOSPITAL_AMBULANCE,
    location: dummyLocation,
    hospital: dummyHospitals[1],
    emergencies: [],
  },
  {
    id: "3",
    type: MedTransportType.PRIVATE_VEHICLE,
    location: dummyLocation,
    emergencies: [],
  },
]

export const dummyPatient: Patient = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  pastHealthSummary: "Generally healthy, occasional migraines",
  knownAilments: ["Migraine", "Mild Asthma"],
  location: dummyLocation,
  healthRecord: [
    {
      date: "2024-02-20",
      hospital: dummyHospitals[0],
      medicalReport: "Treated for severe migraine",
      treatedFor: ["Migraine"],
    },
  ],
}

