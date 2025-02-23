import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Verify from "./pages/Verify"
import SelectRole from "./pages/SelectRole"
import Register from "./pages/Register"
import PatientHome from "./pages/PatientHome"
import HospitalHome from "./pages/HospitalHome"
import MedTransportHome from "./pages/MedTransportHome"
import ProtectedRoute from "./components/auth/ProtectedRoute"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/select-role" element={<SelectRole />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<ProtectedRoute />}>
        <Route path="patient" element={<PatientHome />} />
        <Route path="hospital" element={<HospitalHome />} />
        <Route path="med-transport" element={<MedTransportHome />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App

