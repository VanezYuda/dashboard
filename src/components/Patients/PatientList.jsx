import { patientData } from "./patientData";
import PatientCard from "./PatientCard";

const PatientList = () => {
  return (
    <div className="patient-grid">
      {patientData.map((p) => (
        <PatientCard
          key={p.id}
          name={p.name}
          address={p.address}
          photo={p.photo}
        />
      ))}
    </div>
  );
};

export default PatientList;
