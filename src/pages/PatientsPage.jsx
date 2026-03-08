import PatientList from "../components/Patients/PatientList";
import "../styles/title.css";

const PatientsPage = () => {
  return (
    <div>
      <h1 className="title">Pasien</h1>
      <PatientList />
    </div>
  )
}

export default PatientsPage
